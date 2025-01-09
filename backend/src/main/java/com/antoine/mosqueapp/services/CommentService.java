package com.antoine.mosqueapp.services;

import com.antoine.mosqueapp.models.Comment;
import com.antoine.mosqueapp.models.Mosque;
import com.antoine.mosqueapp.models.User;
import com.antoine.mosqueapp.repositories.CommentRepository;
import com.antoine.mosqueapp.repositories.MosqueRepository;
import com.antoine.mosqueapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final MosqueRepository mosqueRepository;

    public CommentService(CommentRepository commentRepository, UserRepository userRepository, MosqueRepository mosqueRepository) {
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
        this.mosqueRepository = mosqueRepository;
    }

    public List<Comment> getCommentsByMosque(Long mosqueId) {
        return commentRepository.findByMosqueId(mosqueId);
    }

    public Comment createComment(Comment comment) {
        // Get the authenticated user's email from the SecurityContext
        String email = getCurrentAuthenticatedUserEmail();

        // Find the User entity from the database
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Set the user in the comment
        comment.setUser(user);

        // Ensure the mosque exists
        Mosque mosque = mosqueRepository.findById(comment.getMosque().getId())
                .orElseThrow(() -> new RuntimeException("Mosque not found"));

        // Set the mosque in the comment
        comment.setMosque(mosque);

        // Save and return the comment
        return commentRepository.save(comment);
    }

    // Helper method to get the authenticated user's email
    private String getCurrentAuthenticatedUserEmail() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            return ((UserDetails) principal).getUsername();
        } else {
            return principal.toString();
        }
    }

    public void deleteComment(Long id) {
        commentRepository.deleteById(id);
    }
}