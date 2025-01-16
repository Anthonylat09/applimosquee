package com.antoine.mosqueapp.services;

import com.antoine.mosqueapp.models.Comment;
import com.antoine.mosqueapp.models.Mosque;
import com.antoine.mosqueapp.models.User;
import com.antoine.mosqueapp.repositories.CommentRepository;
import com.antoine.mosqueapp.repositories.MosqueRepository;
import com.antoine.mosqueapp.repositories.UserRepository;
import com.antoine.mosqueapp.utils.SecurityUtils;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockedStatic;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class CommentServiceTest {

    @Mock
    CommentRepository commentRepository;

    @Mock
    UserRepository userRepository;

    @Mock
    MosqueRepository mosqueRepository;

    @InjectMocks
    CommentService commentService;

    @Test
    void getCommentsByMosque() {
        Long mosqueId = 1L;
        Comment commentA = new Comment();
        Comment commentB = new Comment();
        commentA.setContent("Hello");
        commentB.setContent("Hi");

        when(commentRepository.findByMosqueId(mosqueId)).thenReturn(List.of(commentA,commentB));

        List<Comment> comments = commentService.getCommentsByMosque(mosqueId);

        assertEquals(2, comments.size());
        assertEquals("Hello", comments.get(0).getContent());
        assertEquals("Hi", comments.get(1).getContent());
        verify(commentRepository, times(1)).findByMosqueId(mosqueId);
    }

    @Test
    void createComment_UserNotFound() {
        try (MockedStatic<SecurityUtils> mockedSecurityUtils = mockStatic(SecurityUtils.class)) {
            mockedSecurityUtils.when(SecurityUtils::getCurrentAuthenticatedUserEmail).thenReturn("antoine@gmail.com");

            Comment comment = new Comment();
            comment.setContent("Good Mosque");
            String userEmail = "antoine@gmail.com";

            when(userRepository.findByEmail(userEmail)).thenReturn(Optional.empty());

            RuntimeException exception = assertThrows(RuntimeException.class, () -> commentService.createComment(comment));

            assertEquals("User not found", exception.getMessage());
            verify(mosqueRepository, never()).findById(any());
            verify(commentRepository, never()).save(any());
            verify(userRepository, times(1)).findByEmail(userEmail);
        }
    }

    @Test
    void createComment_MosqueNotFound() {
        try (MockedStatic<SecurityUtils> mockedSecurityUtils = mockStatic(SecurityUtils.class)) {
            mockedSecurityUtils.when(SecurityUtils::getCurrentAuthenticatedUserEmail).thenReturn("antoine@gmail.com");

            Comment comment = new Comment();
            comment.setContent("Good Mosque");
            String userEmail = "antoine@gmail.com";

            Mosque mosque = new Mosque();
            mosque.setId(1L);

            comment.setMosque(mosque);

            User user = new User();
            user.setId(1L);
            user.setFirstName("Antoine");
            user.setLastName("Ndiaye");

            when(userRepository.findByEmail(userEmail)).thenReturn(Optional.of(user));
            when(mosqueRepository.findById(comment.getMosque().getId())).thenReturn(Optional.empty());

            RuntimeException exception = assertThrows(RuntimeException.class, () -> commentService.createComment(comment));
            assertEquals("Mosque not found", exception.getMessage());

            verify(commentRepository, never()).save(any());
            verify(userRepository, times(1)).findByEmail(userEmail);
        }
    }

    @Test
    void createComment_ok() {
        try (MockedStatic<SecurityUtils> mockedSecurityUtils = mockStatic(SecurityUtils.class)) {
            mockedSecurityUtils.when(SecurityUtils::getCurrentAuthenticatedUserEmail).thenReturn("antoine@gmail.com");

            // Prepare the test data
            Comment comment = new Comment();
            comment.setContent("Good Mosque");
            String userEmail = "antoine@gmail.com";

            Mosque mosque = new Mosque();
            mosque.setId(1L);
            comment.setMosque(mosque);

            User user = new User();
            user.setId(1L);
            user.setFirstName("Antoine");
            user.setLastName("Ndiaye");

            // Mock repository methods
            when(userRepository.findByEmail(userEmail)).thenReturn(Optional.of(user));
            when(mosqueRepository.findById(comment.getMosque().getId())).thenReturn(Optional.of(mosque));
            when(commentRepository.save(any(Comment.class))).thenAnswer(invocation -> invocation.getArgument(0));

            // Execute the service method
            Comment savedComment = commentService.createComment(comment);

            // Assertions
            assertEquals("Good Mosque", savedComment.getContent());
            assertEquals(mosque, savedComment.getMosque());
            assertEquals(user, savedComment.getUser());
            assertNotNull(savedComment.getCreationDate());

            // Verify interactions
            verify(commentRepository, times(1)).save(comment);
            verify(userRepository, times(1)).findByEmail(userEmail);
            verify(mosqueRepository, times(1)).findById(comment.getMosque().getId());
        }
    }

    @Test
    void deleteComment() {
        Long commentId = 1L;

        commentService.deleteComment(commentId);

        verify(commentRepository, times(1)).deleteById(commentId);
    }
}