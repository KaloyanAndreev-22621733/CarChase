package org.example.CarChase.dto.request;

import lombok.Data;

@Data
public class CarSearchRequest {
    private String brand;
    private String model;
    private String engineType;
    private String category;
    private Integer minHorsePower;
    private Integer maxHorsePower;
    private Integer minEuro;
    private Integer maxEuro;
    private String gearBox;
    private String condition;
    private Integer minVolume;
    private Integer maxVolume;
    private Double minPrice;
    private Double maxPrice;
    private Character currency;
    private Double minKilometers;
    private Double maxKilometers;
    private Integer minYear;
    private Integer maxYear;
    private String color;
    private String country;
    private String city;
} 