package org.example.CarChase.controller;

import org.example.CarChase.dto.request.CarSubmissionRequest;
import org.example.CarChase.dto.response.CarListingResponse;
import org.example.CarChase.dto.response.CarSubmissionResponse;
import org.example.CarChase.model.Car;
import org.example.CarChase.model.Image;
import org.example.CarChase.model.User;
import org.example.CarChase.repository.UserRepository;
import org.example.CarChase.service.ImageService;
import org.example.CarChase.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.example.CarChase.dto.request.CarSearchRequest;
import org.example.CarChase.service.CarService;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/cars")
public class CarController {

    @Autowired
    private CarRepository carRepository;
    @Autowired
    private ImageService imageService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CarService carService;

    @GetMapping("/listings")
    public ResponseEntity<List<CarListingResponse>> getCarListings() {
        List<Car> cars = carRepository.findAll();
        List<CarListingResponse> listings = cars.stream()
            .map(car -> {
                CarListingResponse response = new CarListingResponse();
                response.setId(car.getId());
                response.setBrand(car.getBrand());
                response.setModel(car.getModel());
                response.setYear(car.getYear());
                response.setPrice(car.getPrice());
                response.setCurrency(car.getCurrency());
                response.setKilometers(car.getKilometers());
                response.setCity(car.getCity());
                response.setCountry(car.getCountry());
                
                // Set the main image URL if available
                if (!car.getImages().isEmpty()) {
                    // You'll need to implement a way to serve images and get their URLs
                    // For now, we'll just set a placeholder
                    response.setMainImageUrl("/api/images/" + car.getImages().get(0).getId());
                }
                
                return response;
            })
            .collect(Collectors.toList());
            
        return ResponseEntity.ok(listings);
    }

    @PostMapping("/submit")
    public ResponseEntity<CarSubmissionResponse> submitCar(
            @ModelAttribute CarSubmissionRequest request) throws IOException {
        Car car = new Car();
        car.setBrand(request.getBrand());
        car.setModel(request.getModel());
        car.setEngineType(request.getEngineType());
        car.setCategory(request.getCategory());
        car.setHorsePower(request.getHorsePower());
        car.setEuro(request.getEuro());
        car.setGearBox(request.getGearBox());
        car.setCondition(request.getCondition());
        car.setVolume(request.getVolume());
        car.setPrice(request.getPrice());
        car.setCurrency(request.getCurrency());
        car.setKilometers(request.getKilometers());
        car.setYear(request.getYear());
        car.setColor(request.getColor());
        car.setCountry(request.getCountry());
        car.setCity(request.getCity());
        car.setVinNumber(request.getVinNumber());
        if (request.getUserId() != null) {
            User user = userRepository.findById(request.getUserId()).orElse(null);
            car.setUser(user);
        }
        car = carRepository.save(car);
        List<Image> images = new ArrayList<>();
        if (request.getImages() != null) {
            for (MultipartFile file : request.getImages()) {
                if (!file.isEmpty()) {
                    Image image = new Image();
                    image.setData(file.getBytes());
                    image.setCar(car);
                    images.add(image);
                }
            }
        }
        if (!images.isEmpty()) {
            car.setImages(images);
            carRepository.save(car);
        }

        // Create response DTO
        CarSubmissionResponse response = new CarSubmissionResponse();
        response.setId(car.getId());
        response.setBrand(car.getBrand());
        response.setModel(car.getModel());
        response.setEngineType(car.getEngineType());
        response.setCategory(car.getCategory());
        response.setHorsePower(car.getHorsePower());
        response.setEuro(car.getEuro());
        response.setGearBox(car.getGearBox());
        response.setCondition(car.getCondition());
        response.setVolume(car.getVolume());
        response.setPrice(car.getPrice());
        response.setCurrency(car.getCurrency());
        response.setKilometers(car.getKilometers());
        response.setYear(car.getYear());
        response.setColor(car.getColor());
        response.setCountry(car.getCountry());
        response.setCity(car.getCity());
        response.setVinNumber(car.getVinNumber());
        response.setUserId(car.getUser() != null ? car.getUser().getId() : null);
        
        // Set image URLs
        response.setImageUrls(car.getImages().stream()
            .map(image -> "/api/images/" + image.getId())
            .collect(Collectors.toList()));

        return ResponseEntity.ok(response);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<CarListingResponse>> searchCars(
            @ModelAttribute CarSearchRequest searchRequest,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "desc") String direction) {
        
        Sort.Direction sortDirection = Sort.Direction.fromString(direction.toUpperCase());
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by(sortDirection, sortBy));
        
        Page<CarListingResponse> results = carService.searchCars(searchRequest, pageRequest);
        return ResponseEntity.ok(results);
    }
} 