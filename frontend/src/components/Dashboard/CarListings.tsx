import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';

interface Car {
  id: number;
  brand: string;
  model: string;
  yearOfManufacture: number;
  price: number;
  mileage: number;
  vinNumber: string;
  extras: { name: string }[];
  imagePaths: string[];
}

interface FilterState {
  condition: string;
  make: string;
  model: string;
  price: string;
}

const CarListings: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [sortBy, setSortBy] = useState('default');
  const [filters, setFilters] = useState<FilterState>({
    condition: '',
    make: '',
    model: '',
    price: '',
  });
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  // Available options for filters
  const makes = ['Any Makes', 'Toyota', 'BMW', 'Audi', 'Mercedes', 'Ford'];
  const models = ['Any Models', 'Corolla', 'X5', 'A4', 'C-Class', 'Focus'];
  const conditions = ['Condition', 'New', 'Used', 'Certified Pre-Owned'];
  const prices = ['All Prices', '$0 - $10,000', '$10,000 - $20,000', '$20,000 - $30,000', '$30,000+'];

  useEffect(() => {
    // Mock data
    const mockCars: Car[] = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      brand: ['Toyota', 'BMW', 'Audi', 'Mercedes', 'Ford'][i % 5],
      model: ['Corolla', 'X5', 'A4', 'C-Class', 'Focus'][i % 5],
      yearOfManufacture: 2015 + (i % 7),
      price: 10000 + i * 1500,
      mileage: 50000 + i * 8000,
      vinNumber: `VIN1234567890${i}`,
      extras: [{ name: 'Air Conditioning' }, { name: 'Bluetooth' }],
      imagePaths: ['car-placeholder.jpg'],
    }));

    setCars(mockCars);
  }, []);

  const handleFilterChange = (filterName: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching with filters:', filters);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-10">
      {/* Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm mb-8">
        <div className="flex flex-wrap items-center gap-2 p-4">
          {/* Condition Dropdown */}
          <div className="relative">
            <select
              value={filters.condition}
              onChange={(e) => handleFilterChange('condition', e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[140px]"
            >
              {conditions.map((condition) => (
                <option key={condition} value={condition}>{condition}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
              </svg>
            </div>
          </div>

          {/* Make Dropdown */}
          <div className="relative">
            <select
              value={filters.make}
              onChange={(e) => handleFilterChange('make', e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[140px]"
            >
              {makes.map((make) => (
                <option key={make} value={make}>{make}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
              </svg>
            </div>
          </div>

          {/* Model Dropdown */}
          <div className="relative">
            <select
              value={filters.model}
              onChange={(e) => handleFilterChange('model', e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[140px]"
            >
              {models.map((model) => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
              </svg>
            </div>
          </div>

          {/* Price Dropdown */}
          <div className="relative">
            <select
              value={filters.price}
              onChange={(e) => handleFilterChange('price', e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[140px]"
            >
              {prices.map((price) => (
                <option key={price} value={price}>{price}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
              </svg>
            </div>
          </div>

          {/* More Filters Button */}
          <button
            onClick={() => setShowMoreFilters(!showMoreFilters)}
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 px-4 py-2 border border-gray-300 rounded-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
            </svg>
            <span>More Filters</span>
          </button>

          {/* Find Listing Button */}
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors ml-auto"
          >
            Find Listing
          </button>
        </div>
      </div>

      {/* Listings Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Listings</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-md px-3 py-1.5 text-sm"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarListings;