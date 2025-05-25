package org.example.CarChase.dto.response;

import lombok.Data;

@Data
public class CarListingResponse {
    private Long id;
    private String brand;
    private String model;
    private int year;
    private double price;
    private char currency;
    private double kilometers;
    private String city;
    private String country;
    private String mainImageUrl; // URL to the first/main image of the car
}