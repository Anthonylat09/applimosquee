package com.antoine.mosqueapp.services;

import com.antoine.mosqueapp.models.Mosque;
import com.antoine.mosqueapp.repositories.MosqueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MosqueService {

    private final MosqueRepository mosqueRepository;

    public MosqueService(MosqueRepository mosqueRepository) {
        this.mosqueRepository = mosqueRepository;
    }

    public List<Mosque> getAllMosques() {
        return mosqueRepository.findAll();
    }

    public Optional<Mosque> getMosqueById(Long id) {
        return mosqueRepository.findById(id);
    }

    public Mosque createMosque(Mosque mosque) {
        if (mosque.getLocation() != null) {
            // Save mosque along with the location (thanks to CascadeType.ALL)
            return mosqueRepository.save(mosque);
        } else {
            throw new IllegalArgumentException("Location must not be null");
        }
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
