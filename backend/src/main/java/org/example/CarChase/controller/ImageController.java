package org.example.CarChase.controller;

import org.example.CarChase.model.Image;
import org.example.CarChase.service.ImageService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/images")
@CrossOrigin(origins = "*")
public class ImageController {
    private final ImageService imageService;
    
    @Value("${upload.path:uploads}")
    private String uploadPath;

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @GetMapping("/{imageId}")
    public ResponseEntity<Resource> getImage(@PathVariable Long imageId) {
        try {
            Image image = imageService.getImage(imageId);
            Path filePath = Paths.get(uploadPath).resolve(image.getFilepath());
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists() && resource.isReadable()) {
                String contentType = determineContentType(image.getFilepath());
                return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (IOException e) {
            return ResponseEntity.notFound().build();
        }
    }

    private String determineContentType(String filename) {
        String extension = filename.substring(filename.lastIndexOf(".") + 1).toLowerCase();
        return switch (extension) {
            case "jpg", "jpeg" -> "image/jpeg";
            case "png" -> "image/png";
            case "gif" -> "image/gif";
            case "webp" -> "image/webp";
            default -> "application/octet-stream";
        };
    }
} 