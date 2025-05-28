import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CarCard from './CarCard';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  currency: string;
  kilometers: number;
  mainImageUrl: string;
}

interface Filters {
  brand: string;
  priceRange: string;
  year: string;
  kilometers: string;
}

const CarListings: React.FC = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('default');
  const [filters, setFilters] = useState<Filters>({
    brand: '',
    priceRange: '',
    year: '',
    kilometers: ''
  });

  // Получаем уникальные значения для фильтров из данных
  const uniqueBrands = Array.from(new Set(cars.map(car => car.brand))).sort();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => (currentYear - i).toString());
  
  const priceRanges = [
    { label: 'Any Price', value: '' },
    { label: 'Under 5,000', value: '0-5000' },
    { label: '5,000 - 10,000', value: '5000-10000' },
    { label: '10,000 - 20,000', value: '10000-20000' },
    { label: '20,000 - 30,000', value: '20000-30000' },
    { label: 'Over 30,000', value: '30000-999999' }
  ];

  const kilometerRanges = [
    { label: 'Any Mileage', value: '' },
    { label: 'Under 10,000 km', value: '0-10000' },
    { label: '10,000 - 50,000 km', value: '10000-50000' },
    { label: '50,000 - 100,000 km', value: '50000-100000' },
    { label: 'Over 100,000 km', value: '100000-999999' }
  ];

  useEffect(() => {
    fetch('http://localhost:8080/app/cars/listings', {
      credentials: 'include'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch cars');
        }
        return response.json();
        
      })
      .then((data: Car[]) => {
        setCars(data);
        setFilteredCars(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Применяем фильтры и сортировку
  useEffect(() => {
    let result = [...cars];

    // Фильтр по бренду
    if (filters.brand) {
      result = result.filter(car => car.brand === filters.brand);
    }

    // Фильтр по году
    if (filters.year) {
      result = result.filter(car => car.year.toString() === filters.year);
    }

    // Фильтр по цене
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(car => car.price >= min && car.price <= max);
    }

    // Фильтр по пробегу
    if (filters.kilometers) {
      const [min, max] = filters.kilometers.split('-').map(Number);
      result = result.filter(car => car.kilometers >= min && car.kilometers <= max);
    }

    // Сортировка
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'year-new':
        result.sort((a, b) => b.year - a.year);
        break;
      case 'kilometers-low':
        result.sort((a, b) => a.kilometers - b.kilometers);
        break;
    }

    setFilteredCars(result);
  }, [cars, filters, sortBy]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-10">
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Brand Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
            <select
              value={filters.brand}
              onChange={(e) => setFilters(prev => ({ ...prev, brand: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Brands</option>
              {uniqueBrands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>

          {/* Year Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
            <select
              value={filters.year}
              onChange={(e) => setFilters(prev => ({ ...prev, year: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Any Year</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
            <select
              value={filters.priceRange}
              onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {priceRanges.map(range => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>
          </div>

          {/* Kilometers Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mileage</label>
            <select
              value={filters.kilometers}
              onChange={(e) => setFilters(prev => ({ ...prev, kilometers: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {kilometerRanges.map(range => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Sort Options */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="year-new">Newest First</option>
              <option value="kilometers-low">Lowest Mileage</option>
            </select>
          </div>
          <span className="text-sm text-gray-600">
            {filteredCars.length} {filteredCars.length === 1 ? 'car' : 'cars'} found
          </span>
        </div>
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map(car => (
          <div 
            key={car.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(`/car/${car.id}`)}
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              {car.mainImageUrl ? (
                <img
                  src={`http://localhost:8080/api/images/${car.mainImageUrl}`}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  No Image
                </div>
              )}
            </div>
            
            {/* Car Info */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {car.brand} {car.model}
              </h2>
              <div className="text-gray-600 space-y-1">
                <p>Year: {car.year}</p>
                <p>Price: {car.price.toLocaleString()} {car.currency}</p>
                <p>Mileage: {car.kilometers.toLocaleString()} km</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCars.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">No cars found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default CarListings;