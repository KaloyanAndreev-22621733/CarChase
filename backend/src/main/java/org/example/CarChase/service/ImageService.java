package org.example.CarChase.service;

import org.example.CarChase.model.Car;
import org.example.CarChase.model.Image;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ImageService {
    List<Image> saveImages(List<MultipartFile> files, Car car) throws IOException;
    void deleteImage(Long imageId);
    Image getImage(Long imageId);
} 