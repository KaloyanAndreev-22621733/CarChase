package org.example.CarChase.service;

import jakarta.persistence.criteria.Predicate;
import org.example.CarChase.dto.request.CarSearchRequest;
import org.example.CarChase.dto.request.CarSubmissionRequest;
import org.example.CarChase.dto.response.CarListingResponse;
import org.example.CarChase.dto.response.CarSubmissionResponse;
import org.example.CarChase.model.Car;
import org.example.CarChase.model.Image;
import org.example.CarChase.model.User;
import org.example.CarChase.repository.CarRepository;
import org.example.CarChase.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Page<CarListingResponse> searchCars(CarSearchRequest searchRequest, Pageable pageable) {
        Specification<Car> spec = (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (searchRequest.getBrand() != null) {
                predicates.add(cb.like(cb.lower(root.get("brand")),
                    "%" + searchRequest.getBrand().toLowerCase() + "%"));
            }
            if (searchRequest.getModel() != null) {
                predicates.add(cb.like(cb.lower(root.get("model")),
                    "%" + searchRequest.getModel().toLowerCase() + "%"));
            }
            if (searchRequest.getEngineType() != null) {
                predicates.add(cb.equal(root.get("engineType"), searchRequest.getEngineType()));
            }
            if (searchRequest.getCategory() != null) {
                predicates.add(cb.equal(root.get("category"), searchRequest.getCategory()));
            }
            if (searchRequest.getMinHorsePower() != null) {
                predicates.add(cb.greaterThanOrEqualTo(root.get("horsePower"),
                    searchRequest.getMinHorsePower()));
            }
            if (searchRequest.getMaxHorsePower() != null) {
                predicates.add(cb.lessThanOrEqualTo(root.get("horsePower"),
                    searchRequest.getMaxHorsePower()));
            }
            if (searchRequest.getMinPrice() != null) {
                predicates.add(cb.greaterThanOrEqualTo(root.get("price"),
                    searchRequest.getMinPrice()));
            }
            if (searchRequest.getMaxPrice() != null) {
                predicates.add(cb.lessThanOrEqualTo(root.get("price"),
                    searchRequest.getMaxPrice()));
            }
            if (searchRequest.getCurrency() != null) {
                predicates.add(cb.equal(root.get("currency"), searchRequest.getCurrency()));
            }
            if (searchRequest.getMinYear() != null) {
                predicates.add(cb.greaterThanOrEqualTo(root.get("year"),
                    searchRequest.getMinYear()));
            }
            if (searchRequest.getMaxYear() != null) {
                predicates.add(cb.lessThanOrEqualTo(root.get("year"),
                    searchRequest.getMaxYear()));
            }
            if (searchRequest.getCountry() != null) {
                predicates.add(cb.like(cb.lower(root.get("country")),
                    "%" + searchRequest.getCountry().toLowerCase() + "%"));
            }
            if (searchRequest.getCity() != null) {
                predicates.add(cb.like(cb.lower(root.get("city")),
                    "%" + searchRequest.getCity().toLowerCase() + "%"));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };

        return carRepository.findAll(spec, pageable)
            .map(this::convertToCarListingResponse);
    }

    @Override
    public List<CarListingResponse> getAllCarListings() {
        return carRepository.findAll().stream()
            .map(this::convertToCarListingResponse)
            .collect(Collectors.toList());
    }

    @Override
    public CarSubmissionResponse submitCar(CarSubmissionRequest request) throws IOException {
        Car car = new Car();
        updateCarFromRequest(car, request);
        
        if (request.getUserId() != null) {
            User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
            car.setUser(user);
        }
        
        car = carRepository.save(car);
        
        if (request.getImages() != null) {
            List<Image> images = new ArrayList<>();
            for (MultipartFile file : request.getImages()) {
                if (!file.isEmpty()) {
                    Image image = new Image();
                    image.setData(file.getBytes());
                    image.setCar(car);
                    images.add(image);
                }
            }
            if (!images.isEmpty()) {
                car.setImages(images);
                car = carRepository.save(car);
            }
        }
        
        return convertToCarSubmissionResponse(car);
    }

    @Override
    public CarListingResponse getCarById(Long id) {
        Car car = carRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Car not found"));
        return convertToCarListingResponse(car);
    }

    @Override
    public void deleteCar(Long id) {
        if (!carRepository.existsById(id)) {
            throw new RuntimeException("Car not found");
        }
        carRepository.deleteById(id);
    }

    @Override
    public CarSubmissionResponse updateCar(Long id, CarSubmissionRequest request) throws IOException {
        Car car = carRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Car not found"));
        
        updateCarFromRequest(car, request);
        
        if (request.getUserId() != null) {
            User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
            car.setUser(user);
        }
        
        if (request.getImages() != null) {
            // Clear existing images
            car.getImages().clear();
            
            // Add new images
            for (MultipartFile file : request.getImages()) {
                if (!file.isEmpty()) {
                    Image image = new Image();
                    image.setData(file.getBytes());
                    image.setCar(car);
                    car.getImages().add(image);
                }
            }
        }
        
        car = carRepository.save(car);
        return convertToCarSubmissionResponse(car);
    }

    private void updateCarFromRequest(Car car, CarSubmissionRequest request) {
        car.setBrand(request.getBrand());
        car.setModel(request.getModel());
        car.setEngineType(request.getEngineType());
        car.setCategory(request.getCategory());
        car.setHorsePower(request.getHorsePower());
        car.setEuro(request.getEuro());
        car.setGearBox(request.getGearBox());
        car.setCondition(request.getCondition());
        car.setVolume(request.getVolume());
        car.setPrice(request.getPrice());
        car.setCurrency(request.getCurrency());
        car.setKilometers(request.getKilometers());
        car.setYear(request.getYear());
        car.setColor(request.getColor());
        car.setCountry(request.getCountry());
        car.setCity(request.getCity());
        car.setVinNumber(request.getVinNumber());
    }

    private CarListingResponse convertToCarListingResponse(Car car) {
        CarListingResponse response = new CarListingResponse();
        response.setId(car.getId());
        response.setBrand(car.getBrand());
        response.setModel(car.getModel());
        response.setYear(car.getYear());
        response.setPrice(car.getPrice());
        response.setCurrency(car.getCurrency());
        response.setKilometers(car.getKilometers());
        response.setCity(car.getCity());
        response.setCountry(car.getCountry());
        
        if (car.getImages() != null && !car.getImages().isEmpty()) {
            response.setMainImageUrl("/api/images/" + car.getImages().get(0).getId());
        }
        
        return response;
    }

    private CarSubmissionResponse convertToCarSubmissionResponse(Car car) {
        CarSubmissionResponse response = new CarSubmissionResponse();
        response.setId(car.getId());
        response.setBrand(car.getBrand());
        response.setModel(car.getModel());
        response.setEngineType(car.getEngineType());
        response.setCategory(car.getCategory());
        response.setHorsePower(car.getHorsePower());
        response.setEuro(car.getEuro());
        response.setGearBox(car.getGearBox());
        response.setCondition(car.getCondition());
        response.setVolume(car.getVolume());
        response.setPrice(car.getPrice());
        response.setCurrency(car.getCurrency());
        response.setKilometers(car.getKilometers());
        response.setYear(car.getYear());
        response.setColor(car.getColor());
        response.setCountry(car.getCountry());
        response.setCity(car.getCity());
        response.setVinNumber(car.getVinNumber());
        response.setUserId(car.getUser() != null ? car.getUser().getId() : null);
        
        if (car.getImages() != null) {
            response.setImageUrls(car.getImages().stream()
                .map(image -> "/api/images/" + image.getId())
                .collect(Collectors.toList()));
        }
        
        return response;
    }
}