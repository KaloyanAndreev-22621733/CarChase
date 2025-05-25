import React, { useState, useEffect } from 'react';
import CarCard from './CarCard';

type Car = {
  id: number;
  brand: string;
  model: string;
  yearOfManufacture: number;
  price: number;
  mileage: number;
  vinNumber: string;
  extras: { name: string }[]; // Если CarExtra — это объект с полем name
  imagePaths: string[];
};

type Filters = {
  brand: string;
  model: string;
  year: string;
  vin: string;
};

function SearchCar() {
  const [cars, setCars] = useState<Car[]>([]);
  const [filters, setFilters] = useState<Filters>({
    brand: '',
    model: '',
    year: '',
    vin: '',
  });
  const [results, setResults] = useState<Car[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/cars')
      .then(res => res.json())
      .then(data => setCars(data))
      .catch(error => {
        console.error('Error fetching cars:', error);
        setCars([]);
      });
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const filtered = cars.filter(car =>
      (!filters.brand || car.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
      (!filters.model || car.model.toLowerCase().includes(filters.model.toLowerCase())) &&
      (!filters.year || car.yearOfManufacture.toString() === filters.year) &&
      (!filters.vin || car.vinNumber.includes(filters.vin))
    );
    setResults(filtered);
  }

  return (
    <div className="max-w-5xl mx-auto p-10 bg-white rounded-2xl shadow mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Car Search</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div>
          <label className="block text-sm mb-1">Brand</label>
          <input
            name="brand"
            value={filters.brand}
            onChange={handleChange}
            placeholder="e.g. Toyota"
            className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Model</label>
          <input
            name="model"
            value={filters.model}
            onChange={handleChange}
            placeholder="e.g. Corolla"
            className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Year</label>
          <input
            name="year"
            value={filters.year}
            onChange={handleChange}
            placeholder="2020"
            className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">VIN</label>
          <input
            name="vin"
            value={filters.vin}
            onChange={handleChange}
            placeholder="ABC123..."
            className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="md:col-span-3 text-center">
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700"
          >
            Search
          </button>
        </div>
      </form>

      <div>
        <h2 className="text-xl font-semibold mb-4">Results:</h2>
        {results.length === 0 ? (
          <p className="text-gray-500">No cars found with the selected filters.</p>
        ) : (
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchCar;