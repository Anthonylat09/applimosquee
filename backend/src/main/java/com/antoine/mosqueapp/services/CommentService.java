package com.antoine.mosqueapp.services;

import com.antoine.mosqueapp.models.Comment;
import com.antoine.mosqueapp.repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public List<Comment> getCommentsByMosque(Long mosqueId) {
        return commentRepository.findByMosqueId(mosqueId);
    }

    public Comment createComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public void deleteComment(Long id) {
        commentRepository.deleteById(id);
    }
}