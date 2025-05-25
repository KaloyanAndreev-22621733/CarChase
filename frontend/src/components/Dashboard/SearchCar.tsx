import React, { useState, useEffect } from 'react';

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
            <div
              key={car.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={`http://localhost:8080/uploads/${car.imagePaths[0]}`}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:shadow-md">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">
                  {car.brand} {car.model} – {car.yearOfManufacture}
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  VIN: {car.vinNumber}
                </p>
                <div className="flex items-center justify-between text-sm mb-3 text-gray-600">
                  <div>
                    <span className="block">{car.mileage} km</span>
                    <span className="block text-xs text-gray-400">Mileage</span>
                  </div>
                  <div>
                    <span className="block">Petrol</span>
                    <span className="block text-xs text-gray-400">Fuel</span>
                  </div>
                  <div>
                    <span className="block">Automatic</span>
                    <span className="block text-xs text-gray-400">Gearbox</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 text-xl font-bold">
                    €{car.price.toLocaleString()}
                  </span>
                  <a href={`/car/${car.id}`} className="text-blue-600 hover:underline text-sm font-medium">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
}

export default SearchCar;