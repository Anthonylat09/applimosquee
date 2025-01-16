package com.antoine.mosqueapp.services;

import com.antoine.mosqueapp.models.User;
import com.antoine.mosqueapp.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    // Test: Get all users
    @Test
    void getAllUsers() {
        // Arrange
        List<User> mockUsers = List.of(
                new User(1L, "Alice", "Doe", "alice@example.com", "password123"),
                new User(2L, "Bob", "Smith", "bob@example.com", "securepassword")
        );
        when(userRepository.findAll()).thenReturn(mockUsers);

        // Act
        List<User> result = userService.getAllUsers();

        // Assert
        assertEquals(mockUsers, result);
        verify(userRepository, times(1)).findAll();
    }

    // Test: Get user by ID (found)
    @Test
    void getUserById_found() {
        // Arrange
        User mockUser = new User(1L, "Alice", "Doe", "alice@example.com", "password123");
        when(userRepository.findById(1L)).thenReturn(Optional.of(mockUser));

        // Act
        Optional<User> result = userService.getUserById(1L);

        // Assert
        assertTrue(result.isPresent());
        assertEquals(mockUser, result.get());
        verify(userRepository, times(1)).findById(1L);
    }

    // Test: Get user by ID (not found)
    @Test
    void getUserById_notFound() {
        // Arrange
        when(userRepository.findById(1L)).thenReturn(Optional.empty());

        // Act
        Optional<User> result = userService.getUserById(1L);

        // Assert
        assertFalse(result.isPresent());
        verify(userRepository, times(1)).findById(1L);
    }

    // Test: Create user
    @Test
    void createUser() {
        // Arrange
        User newUser = new User(null, "Charlie", "Brown", "charlie@example.com", "plainpassword");
        User savedUser = new User(3L, "Charlie", "Brown", "charlie@example.com", "hashedpassword");
        when(passwordEncoder.encode("plainpassword")).thenReturn("hashedpassword");
        when(userRepository.save(newUser)).thenReturn(savedUser);

        // Act
        User result = userService.createUser(newUser);

        // Assert
        assertEquals(savedUser, result);
        assertEquals("hashedpassword", result.getPassword());
        verify(passwordEncoder, times(1)).encode("plainpassword");
        verify(userRepository, times(1)).save(newUser);
    }

    // Test: Find user by email (found)
    @Test
    void findByEmail_found() {
        // Arrange
        User mockUser = new User(1L, "Alice", "Doe", "alice@example.com", "password123");
        when(userRepository.findByEmail("alice@example.com")).thenReturn(Optional.of(mockUser));

        // Act
        Optional<User> result = userService.findByEmail("alice@example.com");

        // Assert
        assertTrue(result.isPresent());
        assertEquals(mockUser, result.get());
        verify(userRepository, times(1)).findByEmail("alice@example.com");
    }

    // Test: Find user by email (not found)
    @Test
    void findByEmail_notFound() {
        // Arrange
        when(userRepository.findByEmail("alice@example.com")).thenReturn(Optional.empty());

        // Act
        Optional<User> result = userService.findByEmail("alice@example.com");

        // Assert
        assertFalse(result.isPresent());
        verify(userRepository, times(1)).findByEmail("alice@example.com");
    }
}