package org.example.CarChase.service;

import org.example.CarChase.model.Car;
import org.example.CarChase.model.Image;
import org.example.CarChase.repository.CarRepository;
import org.example.CarChase.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private CarRepository carRepository;

    public Image uploadImage(Long carId, MultipartFile file) throws IOException {
        Car car = carRepository.findById(carId)
                .orElseThrow(() -> new RuntimeException("Car not found"));

        Image image = new Image();
        image.setFilepath(file.getOriginalFilename());
        image.setCar(car);
        
        return imageRepository.save(image);
    }

    public List<Image> getImagesByCarId(Long carId) {
        return imageRepository.findByCarId(carId);
    }

    public void deleteImage(Long imageId) {
        imageRepository.deleteById(imageId);
    }
} 