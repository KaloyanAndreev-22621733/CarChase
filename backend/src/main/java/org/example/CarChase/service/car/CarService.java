package org.example.CarChase.service.car;

import org.example.CarChase.dto.request.CarSearchRequest;
import org.example.CarChase.dto.request.CarSubmissionRequest;
import org.example.CarChase.dto.response.CarListingResponse;
import org.example.CarChase.dto.response.CarSubmissionResponse;
import org.example.CarChase.dto.response.CarSearchByIdResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.IOException;
import java.util.List;

public interface CarService {
    Page<CarListingResponse> searchCars(CarSearchRequest searchRequest, Pageable pageable);
    List<CarListingResponse> getAllCarListings();
    CarSubmissionResponse submitCar(CarSubmissionRequest request, String userEmail) throws IOException;
    CarSearchByIdResponse getCarById(Long id);
    void deleteCar(Long id, String userEmail);
    CarSubmissionResponse updateCar(Long id, CarSubmissionRequest request, String userEmail) throws IOException;
    List<CarListingResponse> getMyCars(String userEmail);
}
