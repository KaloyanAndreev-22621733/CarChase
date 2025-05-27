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

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getEngineType() {
        return engineType;
    }

    public void setEngineType(String engineType) {
        this.engineType = engineType;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Integer getMinHorsePower() {
        return minHorsePower;
    }

    public void setMinHorsePower(Integer minHorsePower) {
        this.minHorsePower = minHorsePower;
    }

    public Integer getMaxHorsePower() {
        return maxHorsePower;
    }

    public void setMaxHorsePower(Integer maxHorsePower) {
        this.maxHorsePower = maxHorsePower;
    }

    public Integer getMinEuro() {
        return minEuro;
    }

    public void setMinEuro(Integer minEuro) {
        this.minEuro = minEuro;
    }

    public Integer getMaxEuro() {
        return maxEuro;
    }

    public void setMaxEuro(Integer maxEuro) {
        this.maxEuro = maxEuro;
    }

    public String getGearBox() {
        return gearBox;
    }

    public void setGearBox(String gearBox) {
        this.gearBox = gearBox;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public Integer getMinVolume() {
        return minVolume;
    }

    public void setMinVolume(Integer minVolume) {
        this.minVolume = minVolume;
    }

    public Integer getMaxVolume() {
        return maxVolume;
    }

    public void setMaxVolume(Integer maxVolume) {
        this.maxVolume = maxVolume;
    }

    public Double getMinPrice() {
        return minPrice;
    }

    public void setMinPrice(Double minPrice) {
        this.minPrice = minPrice;
    }

    public Double getMaxPrice() {
        return maxPrice;
    }

    public void setMaxPrice(Double maxPrice) {
        this.maxPrice = maxPrice;
    }

    public Character getCurrency() {
        return currency;
    }

    public void setCurrency(Character currency) {
        this.currency = currency;
    }

    public Double getMinKilometers() {
        return minKilometers;
    }

    public void setMinKilometers(Double minKilometers) {
        this.minKilometers = minKilometers;
    }

    public Double getMaxKilometers() {
        return maxKilometers;
    }

    public void setMaxKilometers(Double maxKilometers) {
        this.maxKilometers = maxKilometers;
    }

    public Integer getMinYear() {
        return minYear;
    }

    public void setMinYear(Integer minYear) {
        this.minYear = minYear;
    }

    public Integer getMaxYear() {
        return maxYear;
    }

    public void setMaxYear(Integer maxYear) {
        this.maxYear = maxYear;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}