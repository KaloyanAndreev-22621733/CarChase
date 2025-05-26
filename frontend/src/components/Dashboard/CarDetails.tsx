import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type CarResponseDto = {
  id: number;
  brand: string;
  model: string;
  yearOfManufacture: number;
  price: number;
  mileage: number;
  vinNumber: string;
  imagePaths: string[];
};

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<CarResponseDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetch(`http://localhost:8080/cars/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch car data');
        return res.json();
      })
      .then((data: CarResponseDto) => {
        setCar(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading car details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!car) return <div>Car not found</div>;

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Название и VIN */}
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-gray-800">
          {car.brand}, {car.model}
        </h1>
        <p className="text-gray-500 text-sm mt-1">VIN: {car.vinNumber}</p>
      </div>

      {/* Характеристики */}
      <div className="flex flex-wrap gap-3 mb-6">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          📅 {car.yearOfManufacture}
        </span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          🧭 {car.mileage} km
        </span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          💰 ${car.price.toLocaleString()}
        </span>
      </div>

      {/* Фото автомобиля */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="col-span-2">
          <img
            src={`http://localhost:8080/uploads/${car.imagePaths[0]}`}
            alt="main"
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {car.imagePaths.slice(1).map((path, i) => (
            <img
              key={i}
              src={`http://localhost:8080/uploads/${path}`}
              alt={`extra-${i}`}
              className="w-full h-40 object-cover rounded-xl"
            />
          ))}
        </div>
      </div>

      {/* Кнопки */}
      <div className="flex gap-4 mt-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Make Offer
        </button>
        <button className="text-gray-600 hover:text-gray-900">Share</button>
        <button className="text-gray-600 hover:text-gray-900">Save</button>
      </div>
    </div>
  );
};

export default CarDetails;