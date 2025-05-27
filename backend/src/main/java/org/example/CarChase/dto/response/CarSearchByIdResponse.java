package org.example.CarChase.dto.response;

import lombok.Data;
import java.util.List;

@Data
public class CarSearchByIdResponse {
    private Long id;
    private String brand;
    private String model;
    private String engineType;
    private String category;
    private Integer horsePower;
    private Integer euro;
    private String gearBox;
    private String condition;
    private Integer volume;
    private Double price;
    private Character currency;
    private Double kilometers;
    private Integer year;
    private String color;
    private String country;
    private String city;
    private String vinNumber;
    private List<String> images;
} 