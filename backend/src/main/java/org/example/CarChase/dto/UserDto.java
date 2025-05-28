package org.example.CarChase.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Long id;
    @NotEmpty(message = "Username can't be empty")
    private String username;
    @NotEmpty(message = "Email can't be empty")
    @Email
    private String email;
    @NotEmpty(message = "Pass can't be empty")
    private String password;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotEmpty(message = "Username can't be empty") String getUsername() {
        return username;
    }

    public void setUsername(@NotEmpty(message = "Username can't be empty") String username) {
        this.username = username;
    }

    public @NotEmpty(message = "Email can't be empty") @Email String getEmail() {
        return email;
    }

    public void setEmail(@NotEmpty(message = "Email can't be empty") @Email String email) {
        this.email = email;
    }

    public @NotEmpty(message = "Pass can't be empty") String getPassword() {
        return password;
    }

    public void setPassword(@NotEmpty(message = "Pass can't be empty") String password) {
        this.password = password;
    }
}
