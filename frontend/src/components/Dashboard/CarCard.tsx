import React from 'react';

type Car = {
  id: number;
  brand: string;
  model: string;
  yearOfManufacture: number;
  price: number;
  mileage: number;
  vinNumber: string;
  extras: { name: string }[];
  imagePaths: string[];
};

type Props = {
  car: Car;
};

const CarCard: React.FC<Props> = ({ car }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
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
            
          </div>
          <div>
           
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
  );
};

export default CarCard;