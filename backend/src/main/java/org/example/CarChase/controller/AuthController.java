package org.example.CarChase.controller;

import jakarta.validation.Valid;
import org.example.CarChase.dto.UserDto;
import org.example.CarChase.service.user.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final UserService userService;
    private final AuthenticationManager authenticationManager;

    public AuthController(UserService userService, AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDto loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    loginRequest.getEmail(),
                    loginRequest.getPassword()
                )
            );
            
            SecurityContextHolder.getContext().setAuthentication(authentication);
            
            return ResponseEntity.ok()
                .body(Map.of(
                    "message", "Successfully logged in",
                    "user", authentication.getName(),
                    "redirect", "/user/profile"
                ));
        } catch (Exception e) {
            return ResponseEntity.status(401)
                .body(Map.of(
                    "error", "Invalid credentials",
                    "message", e.getMessage()
                ));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody UserDto userDto) {
        try {
            userService.save(userDto);
            return ResponseEntity.ok("User registered successfully: " + userDto.getEmail());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Registration failed: " + e.getMessage());
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout() {
        SecurityContextHolder.clearContext();
        return ResponseEntity.ok("Logged out successfully");
    }

    @GetMapping("/access-denied")
    public ResponseEntity<String> accessDenied() {
        return ResponseEntity.status(403).body("Access denied");
    }
}
