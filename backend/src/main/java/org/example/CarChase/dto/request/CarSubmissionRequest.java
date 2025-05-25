package org.example.CarChase.dto.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class CarSubmissionRequest {
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
    private String currency;
    private double kilometers;
    private int year;
    private String color;
    private String country;
    private String city;
    private String vinNumber;
    private Long userId;
    private MultipartFile[] images;
} 