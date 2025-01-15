package com.antoine.mosqueapp.services;

import com.antoine.mosqueapp.models.Mosque;
import com.antoine.mosqueapp.models.PrayerTime;
import com.antoine.mosqueapp.models.enums.Times;
import com.antoine.mosqueapp.repositories.PrayerTimeRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class PrayerTimeServiceTest {

    @InjectMocks
    private PrayerTimeService prayerTimeService;

    @Mock
    private PrayerTimeRepository prayerTimeRepository;

    // Test: Get prayer times by mosque ID
    @Test
    void getPrayerTimesByMosque() {
        Long mosqueId = 1L;

        Mosque mosque = new Mosque();
        mosque.setId(mosqueId);

        List<PrayerTime> prayerTimes = List.of(
                new PrayerTime(1L, mosque, Times.FAJR, LocalDateTime.of(2025, 1, 10, 5, 0)),
                new PrayerTime(2L, mosque, Times.DUHR, LocalDateTime.of(2025, 1, 10, 13, 0))
        );

        when(prayerTimeRepository.findByMosqueId(mosqueId)).thenReturn(prayerTimes);

        List<PrayerTime> result = prayerTimeService.getPrayerTimesByMosque(mosqueId);

        assertEquals(2, result.size());
        assertEquals(prayerTimes, result);
        verify(prayerTimeRepository, times(1)).findByMosqueId(mosqueId);
    }

    // Test: Create or update prayer time
    @Test
    void createOrUpdatePrayerTime() {
        Long mosqueId = 1L;

        Mosque mosque = new Mosque();
        mosque.setId(mosqueId);

        PrayerTime prayerTime = new PrayerTime(null, mosque, Times.FAJR, LocalDateTime.of(2025, 1, 10, 5, 0));
        PrayerTime savedPrayerTime = new PrayerTime(1L, mosque, Times.FAJR, LocalDateTime.of(2025, 1, 10, 5, 0));

        when(prayerTimeRepository.save(prayerTime)).thenReturn(savedPrayerTime);

        PrayerTime result = prayerTimeService.createOrUpdatePrayerTime(prayerTime);

        assertEquals(savedPrayerTime, result);
        verify(prayerTimeRepository, times(1)).save(prayerTime);
    }

    // Test: Get prayer time by mosque ID and prayer
    @Test
    void getPrayerTimeByMosqueAndPrayer() {
        Long mosqueId = 1L;
        Times prayer = Times.FAJR;

        Mosque mosque = new Mosque();
        mosque.setId(mosqueId);

        PrayerTime prayerTime = new PrayerTime(1L, mosque, prayer, LocalDateTime.of(2025, 1, 10, 5, 0));

        when(prayerTimeRepository.findByMosqueIdAndPrayer(mosqueId, prayer)).thenReturn(Optional.of(prayerTime));

        Optional<PrayerTime> result = prayerTimeService.getPrayerTimeByMosqueAndPrayer(mosqueId, prayer);

        assertTrue(result.isPresent());
        assertEquals(prayerTime, result.get());
        verify(prayerTimeRepository, times(1)).findByMosqueIdAndPrayer(mosqueId, prayer);
    }

    // Test: Delete prayer time
    @Test
    void deletePrayerTime() {
        Long prayerTimeId = 1L;

        doNothing().when(prayerTimeRepository).deleteById(prayerTimeId);

        prayerTimeService.deletePrayerTime(prayerTimeId);

        verify(prayerTimeRepository, times(1)).deleteById(prayerTimeId);
    }
}