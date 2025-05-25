package org.example.CarChase.service;

import jakarta.persistence.criteria.Predicate;
import org.example.CarChase.dto.request.CarSearchRequest;
import org.example.CarChase.dto.response.CarListingResponse;
import org.example.CarChase.model.Car;
import org.example.CarChase.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CarService {

    @Autowired
    private CarRepository carRepository;

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
        
        // Set main image URL if available
        if (car.getImages() != null && !car.getImages().isEmpty()) {
//            response.setMainImageUrl(car.getImages().get(0).get);
        }
        
        return response;
    }
} 