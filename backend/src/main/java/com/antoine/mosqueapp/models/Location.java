package com.antoine.mosqueapp.models;

import jakarta.persistence.*;

@Entity
@Table(name = "location")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private double latitude;

    @Column(nullable = false)
    private double longitude;

    private String address;

    @OneToOne(mappedBy = "location", cascade = CascadeType.ALL)
    private Mosque mosque;
}
