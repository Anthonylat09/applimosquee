package com.antoine.mosqueapp.controllers;

import com.antoine.mosqueapp.models.Comment;
import com.antoine.mosqueapp.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @GetMapping("/mosque/{mosqueId}")
    public ResponseEntity<List<Comment>> getCommentsByMosque(@PathVariable Long mosqueId) {
        return ResponseEntity.ok(commentService.getCommentsByMosque(mosqueId));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN, USER')")
    public ResponseEntity<Comment> createComment(@RequestBody Comment comment) {
        return ResponseEntity.ok(commentService.createComment(comment));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN, USER')")
    public ResponseEntity<Void> deleteComment(@PathVariable Long id) {
        commentService.deleteComment(id);
        return ResponseEntity.noContent().build();
    }
}
