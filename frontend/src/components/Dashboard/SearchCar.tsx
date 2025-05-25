import React, { useState } from 'react';

type Car = {
  id: number;
  brand: string;
  model: string;
  year: string;
  price: number;
  mileage: number;
  vin: string;
  features: string[];
};

const mockCars: Car[] = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Corolla',
    year: '2020',
    price: 15000,
    mileage: 50000,
    vin: '1234567890ABCDEF1',
    features: ['Navigation', 'Leather seats'],
  },
  {
    id: 2,
    brand: 'BMW',
    model: 'X5',
    year: '2019',
    price: 32000,
    mileage: 70000,
    vin: '9876543210ZYXWVU2',
    features: ['AC', 'Parking sensors'],
  },
  {
    id: 3,
    brand: 'Audi',
    model: 'A4',
    year: '2022',
    price: 28000,
    mileage: 30000,
    vin: 'A1B2C3D4E5F6G7H8',
    features: ['Navigation', 'Parking sensors'],
  },
];

type Filters = {
  brand: string;
  model: string;
  year: string;
  vin: string;
  features: string[];
};

const availableFeatures = ['Navigation', 'AC', 'Leather seats', 'Parking sensors'];

function SearchCar() {
  const [filters, setFilters] = useState<Filters>({
    brand: '',
    model: '',
    year: '',
    vin: '',
    features: [],
  });

  const [results, setResults] = useState<Car[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  }

  function handleFeaturesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      features: checked
        ? [...prev.features, value]
        : prev.features.filter(f => f !== value),
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const filtered = mockCars.filter(car =>
      (!filters.brand || car.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
      (!filters.model || car.model.toLowerCase().includes(filters.model.toLowerCase())) &&
      (!filters.year || car.year === filters.year) &&
      (!filters.vin || car.vin.includes(filters.vin)) &&
      filters.features.every(f => car.features.includes(f))
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

        <div className="md:col-span-3">
          <label className="block text-sm mb-1">Features</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {availableFeatures.map(function (feature) {
              return (
                <label key={feature} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    value={feature}
                    checked={filters.features.includes(feature)}
                    onChange={handleFeaturesChange}
                    className="accent-purple-600"
                  />
                  {feature}
                </label>
              );
            })}
          </div>
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
          <ul className="space-y-4">
            {results.map(function (car) {
              return (
                <li key={car.id} className="p-4 bg-gray-100 rounded-lg shadow">
                  <p><strong>{car.brand} {car.model}</strong> — {car.year}</p>
                  <p>Price: €{car.price} | Mileage: {car.mileage} km</p>
                  <p>VIN: {car.vin}</p>
                  <p>Features: {car.features.join(', ')}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchCar;