package com.antoine.mosqueapp.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "location")
public class Location {

    private double latitude;

    private double longitude;

    private String address;
}
