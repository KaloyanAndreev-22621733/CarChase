package org.example.CarChase.controller;

import org.example.CarChase.model.Image;
import org.example.CarChase.service.ImageService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/images")
@CrossOrigin(origins = "http://localhost:3000")
public class ImageController {
    private final ImageService imageService;

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @PostMapping("/upload/{carId}")
    public ResponseEntity<List<Image>> uploadImages(
            @PathVariable Long carId,
            @RequestParam("files") List<MultipartFile> files) throws IOException {
        // Note: You'll need to get the Car object from your CarService here
        // This is just a placeholder - implement according to your needs
        return ResponseEntity.ok(imageService.saveImages(files, null));
    }

    @GetMapping("/{filename}")
    public ResponseEntity<byte[]> getImage(@PathVariable String filename) throws IOException {
        byte[] imageBytes = imageService.getImage(filename);
        String contentType = getContentType(filename);
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .body(imageBytes);
    }

    @DeleteMapping("/{imageId}")
    public ResponseEntity<Void> deleteImage(@PathVariable Long imageId) throws IOException {
        imageService.deleteImage(imageId);
        return ResponseEntity.ok().build();
    }

    private String getContentType(String filename) {
        String extension = filename.substring(filename.lastIndexOf(".") + 1).toLowerCase();
        return switch (extension) {
            case "jpg", "jpeg" -> "image/jpeg";
            case "png" -> "image/png";
            case "webp" -> "image/webp";
            default -> "application/octet-stream";
        };
    }
} 