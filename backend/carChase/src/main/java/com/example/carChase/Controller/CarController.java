package com.example.carChase.Controller;

import com.example.carChase.Service.CarService;
import com.example.carChase.model.dto.request.CarRequestDto;
import com.example.carChase.model.dto.response.CarResponseDto;
import com.example.carChase.model.entity.Car;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarController {

    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @PostMapping(value = "/add", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> createCar(
            @RequestPart("car") String carJson,
            @RequestPart(value = "images", required = false) List<MultipartFile> images) {

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            CarRequestDto carRequestDto = objectMapper.readValue(carJson, CarRequestDto.class);

            CarResponseDto savedCar = carService.addCar(carRequestDto, images);

            return ResponseEntity.ok("Car saved with ID: " + savedCar.getId());
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Invalid car data or failed to save images: " + e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<CarResponseDto>> getAllCars() {
        List<CarResponseDto> carsDto = carService.findAllCarsDto();
        return ResponseEntity.ok(carsDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CarResponseDto> getCar(@PathVariable long id) {
        CarResponseDto carDto = carService.findCarWithId(id);
        return ResponseEntity.ok(carDto);
    }
}
