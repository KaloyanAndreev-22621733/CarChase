package com.example.carChase.model.dto.request;

import com.example.carChase.enums.CarExtra;
import jakarta.validation.constraints.*;
import java.util.List;

public class CarRequestDto {

    @NotBlank
    private String brand;

    @NotBlank
    private String model;

    @Min(1886) // Первый автомобиль изобретён в 1886
    private int yearOfManufacture;

    @Positive
    private double price;

    @Min(0)
    private int mileage;

    @NotBlank
    private String vinNumber;

    @Size(max = 4, message = "Maximum 4 extras allowed")
    private List<CarExtra> extras;

    public CarRequestDto() {}

    public CarRequestDto(String brand, String model, int yearOfManufacture, double price, int mileage, String vinNumber, List<CarExtra> extras) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
        this.price = price;
        this.mileage = mileage;
        this.vinNumber = vinNumber;
        this.extras = extras;
    }

    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }

    public String getModel() { return model; }
    public void setModel(String model) { this.model = model; }

    public int getYearOfManufacture() { return yearOfManufacture; }
    public void setYearOfManufacture(int yearOfManufacture) { this.yearOfManufacture = yearOfManufacture; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public int getMileage() { return mileage; }
    public void setMileage(int mileage) { this.mileage = mileage; }

    public String getVinNumber() { return vinNumber; }
    public void setVinNumber(String vinNumber) { this.vinNumber = vinNumber; }

    public List<CarExtra> getExtras() { return extras; }
    public void setExtras(List<CarExtra> extras) { this.extras = extras; }
}
