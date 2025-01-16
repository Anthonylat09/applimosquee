package com.antoine.mosqueapp.services;

import com.antoine.mosqueapp.models.PrayerTime;
import com.antoine.mosqueapp.models.enums.Times;
import com.antoine.mosqueapp.repositories.PrayerTimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrayerTimeService {

    @Autowired
    private PrayerTimeRepository prayerTimeRepository;

    public List<PrayerTime> getPrayerTimesByMosque(Long mosqueId) {
        return prayerTimeRepository.findByMosqueId(mosqueId);
    }

    public PrayerTime createOrUpdatePrayerTime(PrayerTime prayerTime) {
        return prayerTimeRepository.save(prayerTime);
    }

    public Optional<PrayerTime> getPrayerTimeByMosqueAndPrayer(Long mosqueId, Times prayer) {
        return prayerTimeRepository.findByMosqueIdAndPrayer(mosqueId, prayer);
    }

    public void deletePrayerTime(Long id) {
        prayerTimeRepository.deleteById(id);
    }
}