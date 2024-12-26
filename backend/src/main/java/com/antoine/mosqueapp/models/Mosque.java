package com.antoine.mosqueapp.models;

import com.antoine.mosqueapp.models.enums.Services;
import com.antoine.mosqueapp.models.enums.Times;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

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

    private Map<Services, Boolean> services;

    private Map<Times, LocalDateTime> times;

    @OneToMany(mappedBy = "mosque", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments;


}
