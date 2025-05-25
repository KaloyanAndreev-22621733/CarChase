package com.example.carChase.model.dto.response;

public class UserResponseDto {
    private Long id;
    private String firstName;
    private String secondName;
    private String email;
    private String phoneNumber;
    private String avatarPath;

    public UserResponseDto() {}

    public UserResponseDto(Long id, String avatarPath, String phoneNumber, String email, String secondName, String firstName) {
        this.id = id;
        this.avatarPath = avatarPath;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.secondName = secondName;
        this.firstName = firstName;
    }

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

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAvatarPath() {
        return avatarPath;
    }

    public void setAvatarPath(String avatarPath) {
        this.avatarPath = avatarPath;
    }
}
