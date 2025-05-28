import React, { useEffect, useState } from 'react';

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

const TestCarList = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Test Car List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map(car => (
          <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
    </div>
  );
};

export default TestCarList; 