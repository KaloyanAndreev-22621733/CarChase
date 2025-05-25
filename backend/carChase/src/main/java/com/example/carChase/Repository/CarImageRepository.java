package com.example.carChase.Repository;

import com.example.carChase.model.entity.Car;
import com.example.carChase.model.entity.CarImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

// CarImageRepository.java
public interface CarImageRepository extends JpaRepository<CarImage, Long> {
    List<CarImage> findByCar(Car car);
}
