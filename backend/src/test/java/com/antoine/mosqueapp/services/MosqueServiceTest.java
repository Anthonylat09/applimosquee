package com.antoine.mosqueapp.services;

import com.antoine.mosqueapp.models.Location;
import com.antoine.mosqueapp.models.Mosque;
import com.antoine.mosqueapp.repositories.LocationRepository;
import com.antoine.mosqueapp.repositories.MosqueRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class MosqueServiceTest {

    @Mock
    MosqueRepository mosqueRepository;

    @InjectMocks
    MosqueService mosqueService;

    @Test
    void testGetAllMosques() {
        List<Mosque> mosques = List.of(new Mosque("Mosque A"), new Mosque("Mosque B"));

        when(mosqueRepository.findAll()).thenReturn(mosques);

        List<Mosque> result = mosqueService.getAllMosques();

        assertEquals(2, result.size());
        verify(mosqueRepository, times(1)).findAll();
    }

    @Test
    void testGetMosqueById_MosqueFound() {
        Mosque mosque = new Mosque();
        mosque.setId(1L);
        mosque.setName("Mosque A");

        when(mosqueRepository.findById(1L)).thenReturn(Optional.of(mosque));

        Optional<Mosque> result = mosqueService.getMosqueById(1L);

        assertTrue(result.isPresent());
        assertEquals(1L, result.get().getId());
        verify(mosqueRepository, times(1)).findById(1L);
    }

    @Test
    void testGetMosqueById_MosqueNotFound() {
        Mosque mosque = new Mosque();
        mosque.setId(2L);
        mosque.setName("Mosque A");

        when(mosqueRepository.findById(1L)).thenReturn(Optional.empty());

        Optional<Mosque> result = mosqueService.getMosqueById(1L);

        assertFalse(result.isPresent());
        verify(mosqueRepository, times(1)).findById(1L);
    }

    @Test
    void testCreateMosque_LocationNotNull() {

        Mosque mosque = new Mosque("Mosque A");
        Location location = new Location();
        location.setLatitude(12);
        location.setLongitude(13);
        mosque.setLocation(location);

        when(mosqueRepository.save(mosque)).thenReturn(mosque);

        Mosque savedMosque = mosqueService.createMosque(mosque);

        assertNotNull(savedMosque);
        assertEquals("Mosque A", savedMosque.getName());
        verify(mosqueRepository, times(1)).save(mosque);
    }

    @Test
    void testCreateMosque_LocationNull() {

        Mosque mosque = new Mosque("Mosque A");

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> mosqueService.createMosque(mosque));
        assertEquals("Location must not be null", exception.getMessage());

        verify(mosqueRepository, never()).save(any(Mosque.class));

    }

    @Test
    void TestUpdateMosque_MosqueFound() {
        Long mosqueId = 1L;
        Mosque mosque = new Mosque("Mosque A");
        Mosque updatedMosque = new Mosque("Mosque B");

        when(mosqueRepository.findById(mosqueId)).thenReturn(Optional.of(mosque));
        when(mosqueRepository.save(mosque)).thenReturn(mosque);


        Mosque result = mosqueService.updateMosque(mosqueId, updatedMosque);

        assertNotNull(result);
        assertEquals(updatedMosque.getName(), result.getName());
        verify(mosqueRepository, times(1)).findById(1L);
        verify(mosqueRepository, times(1)).save(mosque);
    }

    @Test
    void TestUpdateMosque_MosqueNotFound() {
        Mosque mosque = new Mosque("Mosque A");
        mosque.setId(1L);

        when(mosqueRepository.findById(2L)).thenReturn(Optional.empty());

        RuntimeException exception = assertThrows(RuntimeException.class, () -> mosqueService.updateMosque(2L, mosque));
        assertEquals("Mosque not found", exception.getMessage());

        verify(mosqueRepository, times(1)).findById(2L);
        verify(mosqueRepository, never()).save(any(Mosque.class));
    }

    @Test
    void testDeleteMosque() {
        Long mosqueId = 1L;

        mosqueService.deleteMosque(mosqueId);

        verify(mosqueRepository, times(1)).deleteById(1L);
    }
}