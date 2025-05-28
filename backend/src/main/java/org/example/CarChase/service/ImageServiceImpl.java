package org.example.CarChase.service;

import org.example.CarChase.model.Car;
import org.example.CarChase.model.Image;
import org.example.CarChase.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class ImageServiceImpl implements ImageService {
    private final ImageRepository imageRepository;
    
    @Value("${upload.path:uploads}")
    private String uploadPath;

    public ImageServiceImpl(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    @Override
    public List<Image> saveImages(List<MultipartFile> files, Car car) throws IOException {
        List<Image> savedImages = new ArrayList<>();
        
        for (MultipartFile file : files) {
            if (file != null && !file.isEmpty()) {
                String originalFilename = file.getOriginalFilename();
                String extension = originalFilename.substring(originalFilename.lastIndexOf("."));
                String uuidFile = UUID.randomUUID().toString();
                String resultFilename = uuidFile + extension;
                
                Path uploadDir = Paths.get(uploadPath);
                if (!Files.exists(uploadDir)) {
                    Files.createDirectories(uploadDir);
                }
                
                Path filePath = uploadDir.resolve(resultFilename);
                Files.write(filePath, file.getBytes());
                
                Image image = new Image();
                image.setFilepath(resultFilename);
                image.setCar(car);
                
                savedImages.add(imageRepository.save(image));
            }
        }
        
        return savedImages;
    }

    @Override
    public void deleteImage(Long imageId) {
        Image image = imageRepository.findById(imageId)
                .orElseThrow(() -> new RuntimeException("Image not found"));
        
        Path filePath = Paths.get(uploadPath, image.getFilepath());
        try {
            Files.deleteIfExists(filePath);
        } catch (IOException e) {
            throw new RuntimeException("Failed to delete image file", e);
        }
        
        imageRepository.delete(image);
    }

    @Override
    public Image getImage(Long imageId) {
        return imageRepository.findById(imageId)
                .orElseThrow(() -> new RuntimeException("Image not found"));
    }
} 