package com.antoine.mosqueapp.repositories;

import com.antoine.mosqueapp.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
    // Ajouter des requêtes spécifiques pour des recherches géographiques
    List<Location> findByCity(String city);
}
