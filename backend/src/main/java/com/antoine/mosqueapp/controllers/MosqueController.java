package com.antoine.mosqueapp.controllers;

import com.antoine.mosqueapp.models.Mosque;
import com.antoine.mosqueapp.services.MosqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mosques")
public class MosqueController {

    @Autowired
    private MosqueService mosqueService;

    @GetMapping
    public ResponseEntity<List<Mosque>> getAllMosques() {
        return ResponseEntity.ok(mosqueService.getAllMosques());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Mosque> getMosqueById(@PathVariable Long id) {
        return mosqueService.getMosqueById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Mosque> createMosque(@RequestBody Mosque mosque) {
        return ResponseEntity.ok(mosqueService.createMosque(mosque));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Mosque> updateMosque(@PathVariable Long id, @RequestBody Mosque mosque) {
        return ResponseEntity.ok(mosqueService.updateMosque(id, mosque));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMosque(@PathVariable Long id) {
        mosqueService.deleteMosque(id);
        return ResponseEntity.noContent().build();
    }
}