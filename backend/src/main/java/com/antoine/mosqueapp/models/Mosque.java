package com.antoine.mosqueapp.models;

import com.antoine.mosqueapp.models.enums.Services;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.*;

@Entity
@Table(name = "mosque")
public class Mosque {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "location_id", referencedColumnName = "id")
    private Location location;

    @ElementCollection
    @CollectionTable(name = "mosque_services", joinColumns = @JoinColumn(name = "mosque_id"))
    @MapKeyEnumerated(EnumType.STRING)
    @Column(name = "available")
    private Map<Services, Boolean> services = new HashMap<>();;

    @OneToMany(mappedBy = "mosque", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<PrayerTime> prayerTimes = new HashSet<>();

    @OneToMany(mappedBy = "mosque", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments = new ArrayList<>();


}
