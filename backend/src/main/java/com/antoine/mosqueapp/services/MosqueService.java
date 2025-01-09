package com.antoine.mosqueapp.services;

import com.antoine.mosqueapp.models.Location;
import com.antoine.mosqueapp.models.Mosque;
import com.antoine.mosqueapp.repositories.LocationRepository;
import com.antoine.mosqueapp.repositories.MosqueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MosqueService {

    private final MosqueRepository mosqueRepository;
    private final LocationRepository locationRepository;

    public MosqueService(MosqueRepository mosqueRepository, LocationRepository locationRepository) {
        this.mosqueRepository = mosqueRepository;
        this.locationRepository = locationRepository;
    }

    public List<Mosque> getAllMosques() {
        return mosqueRepository.findAll();
    }

    public Optional<Mosque> getMosqueById(Long id) {
        return mosqueRepository.findById(id);
    }

    public Mosque createMosque(Mosque mosque) {
        // Check if the location exists in the database
        Location location = mosque.getLocation();
        if (location != null) {
            if (location.getId() == null) {
                // If the location is new, save it first
                location = locationRepository.save(location);
            } else {
                // If the location already exists, load it from the database
                location = locationRepository.findById(location.getId())
                        .orElseThrow(() -> new RuntimeException("Location not found"));
            }
            mosque.setLocation(location);
        }

        // Now save the mosque
        return mosqueRepository.save(mosque);
    }

    public Mosque updateMosque(Long id, Mosque mosqueDetails) {
        Mosque mosque = mosqueRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Mosque not found"));

        mosque.setName(mosqueDetails.getName());
        mosque.setLocation(mosqueDetails.getLocation());
        mosque.setServices(mosqueDetails.getServices());
        return mosqueRepository.save(mosque);
    }

    public void deleteMosque(Long id) {
        mosqueRepository.deleteById(id);
    }
}
