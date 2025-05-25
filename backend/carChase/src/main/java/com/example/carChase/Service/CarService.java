package com.example.carChase.Service;

import com.example.carChase.Repository.CarImageRepository;
import com.example.carChase.Repository.CarRepository;
import com.example.carChase.model.dto.request.CarRequestDto;
import com.example.carChase.model.dto.response.CarResponseDto;
import com.example.carChase.model.entity.Car;
import com.example.carChase.model.entity.CarImage;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CarService {

    private final CarRepository carRepository;
    private final CarImageRepository carImageRepository;
    private final Path uploadDir = Paths.get("uploads");

    public CarService(CarRepository carRepository, CarImageRepository carImageRepository) {
        this.carRepository = carRepository;
        this.carImageRepository = carImageRepository;
    }

    public CarResponseDto addCar(CarRequestDto dto, List<MultipartFile> images) throws IOException {
        // Создаём папку, если не существует
        if (!Files.exists(uploadDir)) {
            Files.createDirectories(uploadDir);
        }

        // Создаём сущность Car
        Car car = new Car();
        car.setBrand(dto.getBrand());
        car.setModel(dto.getModel());
        car.setYearOfManufacture(dto.getYearOfManufacture());
        car.setPrice(dto.getPrice());
        car.setMileage(dto.getMileage());
        car.setVinNumber(dto.getVinNumber());
        car.setExtras(dto.getExtras());

        carRepository.save(car);

        // Обрабатываем изображения
        List<String> imagePaths = new ArrayList<>();

        if (images != null) {
            for (MultipartFile image : images) {
                if (image != null && !image.isEmpty()) {
                    String uniqueFileName = UUID.randomUUID() + "_" + image.getOriginalFilename();
                    Path filePath = uploadDir.resolve(uniqueFileName);

                    Files.copy(image.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

                    CarImage carImage = new CarImage();
                    carImage.setFilePath(uniqueFileName);
                    carImage.setCar(car);
                    carImageRepository.save(carImage);

                    imagePaths.add(uniqueFileName);
                }
            }
        }

        // Возвращаем DTO-ответ
        return new CarResponseDto(
                car.getId(),
                car.getBrand(),
                car.getModel(),
                car.getYearOfManufacture(),
                car.getPrice(),
                car.getMileage(),
                car.getVinNumber(),
                car.getExtras(),
                imagePaths
        );
    }

    // В сервисе создаём метод маппинга
    public CarResponseDto mapToDto(Car car) {
        List<String> imagePaths = car.getImages().stream()
                .map(CarImage::getFilePath)
                .collect(Collectors.toList());

        return new CarResponseDto(
                car.getId(),
                car.getBrand(),
                car.getModel(),
                car.getYearOfManufacture(),
                car.getPrice(),
                car.getMileage(),
                car.getVinNumber(),
                car.getExtras(),
                imagePaths
        );
    }

    public List<CarResponseDto> findAllCarsDto() {
        List<Car> cars = carRepository.findAll();
        return cars.stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }
}