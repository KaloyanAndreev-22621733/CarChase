package org.example.CarChase.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "car")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "car_id")
    private Long id;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_id")
    private User user;
    @Column
    private String brand;
    @Column
    private String model;
    @Column
    private String engineType;
    @Column
    private String category;
    @Column(name = "h.p")
    private int horsePower;
    @Column
    private int euro;
    @Column
    private String gearBox;
    @Column
    private String condition;
    @Column
    private int volume;
    @Column
    private double price;
    @Column
    private char currency;
    @Column(name = "km")
    private double kilometers;
    @Column
    private int year;
    @Column
    private String color;
    @Column
    private String country;
    @Column
    private String city;
    @Column(name = "VIN")
    private String vinNumber;
    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Image> images = new ArrayList<>();
}
