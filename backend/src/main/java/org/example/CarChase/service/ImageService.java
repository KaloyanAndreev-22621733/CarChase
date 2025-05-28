package org.example.CarChase.service;

import org.example.CarChase.model.Car;
import org.example.CarChase.model.Image;
import org.example.CarChase.repository.CarRepository;
import org.example.CarChase.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private CarRepository carRepository;

    private final String UPLOAD_DIR = "backend/src/main/resources/static/images";

    public Image uploadImage(Long carId, MultipartFile file) throws IOException {
        Car car = carRepository.findById(carId)
                .orElseThrow(() -> new RuntimeException("Car not found"));

        // Create directory if it doesn't exist
        Path uploadPath = Paths.get(UPLOAD_DIR);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // Generate unique filename
        String originalFilename = file.getOriginalFilename();
        String extension = originalFilename.substring(originalFilename.lastIndexOf("."));
        String newFilename = UUID.randomUUID().toString() + extension;

        // Save file to disk
        Path filePath = uploadPath.resolve(newFilename);
        Files.copy(file.getInputStream(), filePath);

        // Create and save image entity
        Image image = new Image();
        image.setFilepath("/images/" + newFilename);
        image.setCar(car);
        
        return imageRepository.save(image);
    }

    public List<Image> getImagesByCarId(Long carId) {
        return imageRepository.findByCarId(carId);
    }

    public void deleteImage(Long imageId) {
        Image image = imageRepository.findById(imageId)
                .orElseThrow(() -> new RuntimeException("Image not found"));
        
        // Delete file from disk
        try {
            String filename = image.getFilepath().substring(image.getFilepath().lastIndexOf("/") + 1);
            Path filePath = Paths.get(UPLOAD_DIR, filename);
            Files.deleteIfExists(filePath);
        } catch (IOException e) {
            throw new RuntimeException("Error deleting image file", e);
        }
        
        imageRepository.deleteById(imageId);
    }
} 