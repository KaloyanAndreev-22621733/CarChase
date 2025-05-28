package org.example.CarChase.dto.response;

import lombok.Data;
import java.util.List;

@Data
public class UserProfileResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private List<String> roles;
    private List<CarListingResponse> cars;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public List<CarListingResponse> getCars() {
        return cars;
    }

    public void setCars(List<CarListingResponse> cars) {
        this.cars = cars;
    }
} 