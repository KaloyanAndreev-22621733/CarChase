package org.example.CarChase.controller;

import org.example.CarChase.dto.UserDto;
import org.example.CarChase.dto.request.CarSubmissionRequest;
import org.example.CarChase.dto.response.CarListingResponse;
import org.example.CarChase.dto.response.CarSubmissionResponse;
import org.example.CarChase.dto.response.CarSearchByIdResponse;
import org.example.CarChase.dto.response.UserProfileResponse;
import org.example.CarChase.model.User;
import org.example.CarChase.service.car.CarService;
import org.example.CarChase.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.example.CarChase.dto.request.CarSearchRequest;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/app")
public class CarController {

    @Autowired
    private CarService carService;

    @Autowired
    private UserService userService;

    @GetMapping("/profile/{id}")
    public ResponseEntity<UserProfileResponse> getProfile(@PathVariable long id) {
        return ResponseEntity.ok(userService.getDetailedProfile(id));
    }


    @GetMapping("/cars/listings")
    public ResponseEntity<List<CarListingResponse>> getCarListings() {
        return ResponseEntity.ok(carService.getAllCarListings());
    }

    @GetMapping("/cars/listings/{id}")
    public ResponseEntity<CarSearchByIdResponse> getCarById(@PathVariable Long id) {
        return ResponseEntity.ok(carService.getCarById(id));
    }

    @PostMapping("/profile/submit-car")
    public ResponseEntity<CarSubmissionResponse> submitCar(
            @ModelAttribute CarSubmissionRequest request) throws IOException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userEmail = authentication.getName();
        return ResponseEntity.ok(carService.submitCar(request, userEmail));
    }

    @GetMapping("/profile/my-cars")
    public ResponseEntity<List<CarListingResponse>> getAllCarListings() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userEmail = authentication.getName();
        return ResponseEntity.ok(carService.getMyCars(userEmail));
    }
    
    @PutMapping("/profile/my-cars/{id}")
    public ResponseEntity<CarSubmissionResponse> updateCar(
            @PathVariable Long id,
            @ModelAttribute CarSubmissionRequest request) throws IOException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(401).build();
        }
        String userEmail = authentication.getName();
        return ResponseEntity.ok(carService.updateCar(id, request, userEmail));
    }

    @DeleteMapping("/profile/my-cars/{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable Long id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(401).build();
        }
        String userEmail = authentication.getName();
        carService.deleteCar(id, userEmail);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/cars/check-auth")
    public ResponseEntity<Boolean> checkAuthentication() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        boolean isAuthenticated = authentication != null && authentication.isAuthenticated();
        return ResponseEntity.ok(isAuthenticated);
    }

    @GetMapping("/cars/listings/search")
    public ResponseEntity<Page<CarListingResponse>> searchCars(
            @ModelAttribute CarSearchRequest searchRequest,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "desc") String direction) {

        Sort.Direction sortDirection = Sort.Direction.fromString(direction.toUpperCase());
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by(sortDirection, sortBy));

        return ResponseEntity.ok(carService.searchCars(searchRequest, pageRequest));
    }
} 