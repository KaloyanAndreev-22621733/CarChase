package com.example.carChase.model.dto.request;

import jakarta.validation.constraints.*;

public class UserRequestDto {

    @NotBlank
    private String firstName;

    @NotBlank
    private String secondName;

    @Email
    @NotBlank
    private String email;

    private String phoneNumber;

    @NotBlank
    @Size(min = 6, message = "Password must be at least 6 characters long")
    private String password;

    public UserRequestDto() {}

    public UserRequestDto(String firstName, String secondName, String email, String phoneNumber, String password) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getSecondName() { return secondName; }
    public void setSecondName(String secondName) { this.secondName = secondName; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}