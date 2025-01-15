package com.antoine.mosqueapp.utils;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

public class SecurityUtils {

    // Private constructor to prevent instantiation
    private SecurityUtils() {
        throw new UnsupportedOperationException("Utility class should not be instantiated");
    }

    // Static method to get the current authenticated user's email
    public static String getCurrentAuthenticatedUserEmail() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            return ((UserDetails) principal).getUsername();
        } else {
            return principal.toString();
        }
    }
}
