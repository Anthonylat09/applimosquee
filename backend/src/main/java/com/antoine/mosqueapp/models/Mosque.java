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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public Map<Services, Boolean> getServices() {
        return services;
    }

    public void setServices(Map<Services, Boolean> services) {
        this.services = services;
    }

    public Set<PrayerTime> getPrayerTimes() {
        return prayerTimes;
    }

    public void setPrayerTimes(Set<PrayerTime> prayerTimes) {
        this.prayerTimes = prayerTimes;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
}
