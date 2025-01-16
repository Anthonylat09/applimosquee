package com.antoine.mosqueapp.models;

import com.antoine.mosqueapp.models.enums.Times;
import jakarta.persistence.*;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Table(name = "prayer_time")
@EqualsAndHashCode
public class PrayerTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Times prayer;

    @Column(nullable = false)
    private LocalDateTime time;

    @ManyToOne
    @JoinColumn(name = "mosque_id", nullable = false)
    private Mosque mosque;

    public PrayerTime() {
    }

    public PrayerTime(Long id, Mosque mosque, Times prayer, LocalDateTime time) {
        this.id = id;
        this.prayer = prayer;
        this.time = time;
        this.mosque = mosque;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Times getPrayer() {
        return prayer;
    }

    public void setPrayer(Times prayer) {
        this.prayer = prayer;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }

    public Mosque getMosque() {
        return mosque;
    }

    public void setMosque(Mosque mosque) {
        this.mosque = mosque;
    }
}