package org.example.CarChase.dto.response;

import lombok.Data;
import java.util.List;

@Data
public class CarSubmissionResponse {
    private Long id;
    private String brand;
    private String model;
    private String engineType;
    private String category;
    private int horsePower;
    private int euro;
    private String gearBox;
    private String condition;
    private int volume;
    private double price;
    private char currency;
    private double kilometers;
    private int year;
    private String color;
    private String country;
    private String city;
    private String vinNumber;
    private Long userId;
    private List<String> imageUrls; // URLs to the uploaded images
} 