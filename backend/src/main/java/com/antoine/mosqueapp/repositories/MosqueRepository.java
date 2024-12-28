package com.antoine.mosqueapp.repositories;

import com.antoine.mosqueapp.models.Mosque;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MosqueRepository extends JpaRepository<Mosque, Long> {
    // Ajouter des méthodes de requête personnalisées si nécessaire
    List<Mosque> findByNameContainingIgnoreCase(String name);
}
