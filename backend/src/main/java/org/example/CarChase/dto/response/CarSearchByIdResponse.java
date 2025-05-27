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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public Integer getHorsePower() {
        return horsePower;
    }

    public void setHorsePower(Integer horsePower) {
        this.horsePower = horsePower;
    }

    public Integer getEuro() {
        return euro;
    }

    public void setEuro(Integer euro) {
        this.euro = euro;
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

    public Integer getVolume() {
        return volume;
    }

    public void setVolume(Integer volume) {
        this.volume = volume;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Character getCurrency() {
        return currency;
    }

    public void setCurrency(Character currency) {
        this.currency = currency;
    }

    public Double getKilometers() {
        return kilometers;
    }

    public void setKilometers(Double kilometers) {
        this.kilometers = kilometers;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
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

    public String getVinNumber() {
        return vinNumber;
    }

    public void setVinNumber(String vinNumber) {
        this.vinNumber = vinNumber;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }
}