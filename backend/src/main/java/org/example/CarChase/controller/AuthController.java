package org.example.CarChase.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.example.CarChase.dto.UserDto;
import org.example.CarChase.service.user.UserService;
import org.springframework.http.MediaType;
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

    @PostMapping(value = "/login", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> login(
            @RequestParam("email") String email,
            @RequestParam("password") String password,
            HttpServletRequest request) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(email, password)
            );
            
            SecurityContextHolder.getContext().setAuthentication(authentication);
            
            HttpSession session = request.getSession(true);
            session.setAttribute("SPRING_SECURITY_CONTEXT", SecurityContextHolder.getContext());
            
            var user = userService.findByEmail(email);
            
            return ResponseEntity.ok()
                .body(Map.of(
                    "message", "Successfully logged in",
                    "user", authentication.getName(),
                    "userId", user.getId()
                ));
        } catch (Exception e) {
            return ResponseEntity.status(401)
                .body(Map.of(
                    "error", "Invalid credentials",
                    "message", e.getMessage()
                ));
        }
    }

    @PostMapping(value = "/register", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> register(
    @RequestParam("username") String username,
            @RequestParam("email") String email,
            @RequestParam("password") String password) {
        try {
            UserDto userDto = new UserDto();
            userDto.setUsername(username);
            userDto.setEmail(email);
            userDto.setPassword(password);
            
            userService.save(userDto);
            return ResponseEntity.ok("User registered successfully: " + email);
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
