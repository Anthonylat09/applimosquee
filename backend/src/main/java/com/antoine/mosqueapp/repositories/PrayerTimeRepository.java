package com.antoine.mosqueapp.repositories;

import com.antoine.mosqueapp.models.PrayerTime;
import com.antoine.mosqueapp.models.enums.Times;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PrayerTimeRepository extends JpaRepository<PrayerTime, Long> {
    // Trouver les horaires de prière d'une mosquée
    List<PrayerTime> findByMosqueId(Long mosqueId);

    // Trouver un horaire de prière spécifique pour une mosquée
    Optional<PrayerTime> findByMosqueIdAndPrayer(Long mosqueId, Times prayer);
}
