package com.antoine.mosqueapp.repositories;

import com.antoine.mosqueapp.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    // Trouver les commentaires associés à une mosquée
    List<Comment> findByMosqueId(Long mosqueId);

    // Trouver les commentaires d'un utilisateur spécifique
    List<Comment> findByUserId(Long userId);
}