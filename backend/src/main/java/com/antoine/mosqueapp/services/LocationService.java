package com.antoine.mosqueapp.services;

import com.antoine.mosqueapp.models.Location;
import com.antoine.mosqueapp.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {

    @Autowired
    private LocationRepository locationRepository;

    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }

    public Location createLocation(Location location) {
        return locationRepository.save(location);
    }

    public List<Location> getLocationsByCity(String city) {
        return locationRepository.findByCity(city);
    }

    public void deleteLocation(Long id) {
        locationRepository.deleteById(id);
    }
}