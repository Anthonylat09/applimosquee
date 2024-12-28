package com.antoine.mosqueapp.controllers;

import com.antoine.mosqueapp.models.PrayerTime;
import com.antoine.mosqueapp.services.PrayerTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/prayertimes")
public class PrayerTimeController {

    @Autowired
    private PrayerTimeService prayerTimeService;

    @GetMapping("/mosque/{mosqueId}")
    public ResponseEntity<List<PrayerTime>> getPrayerTimesByMosque(@PathVariable Long mosqueId) {
        return ResponseEntity.ok(prayerTimeService.getPrayerTimesByMosque(mosqueId));
    }

    @PostMapping
    public ResponseEntity<PrayerTime> createOrUpdatePrayerTime(@RequestBody PrayerTime prayerTime) {
        return ResponseEntity.ok(prayerTimeService.createOrUpdatePrayerTime(prayerTime));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePrayerTime(@PathVariable Long id) {
        prayerTimeService.deletePrayerTime(id);
        return ResponseEntity.noContent().build();
    }
}
