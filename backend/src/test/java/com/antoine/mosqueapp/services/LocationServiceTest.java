package com.antoine.mosqueapp.services;

import com.antoine.mosqueapp.models.Location;
import com.antoine.mosqueapp.repositories.LocationRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class LocationServiceTest {

    @InjectMocks
    private LocationService locationService;

    @Mock
    private LocationRepository locationRepository;

    @Test
    void getAllLocations() {
        // Arrange
        List<Location> mockLocations = List.of(
                new Location(1L, 40.7128, -74.0060, "New York"),
                new Location(2L, 34.0522, -118.2437, "Los Angeles")
        );
        when(locationRepository.findAll()).thenReturn(mockLocations);

        // Act
        List<Location> result = locationService.getAllLocations();

        // Assert
        assertEquals(mockLocations, result);
        verify(locationRepository, times(1)).findAll();
    }

    @Test
    void createLocation() {
        // Arrange
        Location newLocation = new Location(null, 51.5074, -0.1278, "London");
        Location savedLocation = new Location(3L, 51.5074, -0.1278, "London");
        when(locationRepository.save(newLocation)).thenReturn(savedLocation);

        // Act
        Location result = locationService.createLocation(newLocation);

        // Assert
        assertEquals(savedLocation, result);
        verify(locationRepository, times(1)).save(newLocation);
    }

    @Test
    void deleteLocation() {
        // Arrange
        Long locationId = 1L;

        // Act
        locationService.deleteLocation(locationId);

        // Assert
        verify(locationRepository, times(1)).deleteById(locationId);
    }
}