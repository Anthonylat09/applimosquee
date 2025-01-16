package com.antoine.mosqueapp.repositories;

import com.antoine.mosqueapp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Ajouter des méthodes de recherche spécifiques
    Optional<User> findByEmail(String email);
}
