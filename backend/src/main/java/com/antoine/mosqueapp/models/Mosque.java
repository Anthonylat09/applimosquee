package com.antoine.mosqueapp.models;

import jakarta.persistence.*;

@Entity
@Table(name = "mosque")
public class Mosque {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String location;


}
