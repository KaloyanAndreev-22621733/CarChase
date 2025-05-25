import React from "react";

interface Car {
  id: number;
  brand: string;
  model: string;
  yearOfManufacture: number;
  color: string;
  price: number;
  description: string;
  imagePaths: string[];
}

function CarList() {
  const [cars, setCars] = React.useState<Car[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch('http://localhost:8080/cars')
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
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

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className="car-list">
      {cars.map(car => (
        <div key={car.id} className="car-card">
          {/* Изображения */}
          <div className="car-images">
            {car.imagePaths && car.imagePaths.length > 0 ? (
              <div className="image-gallery">
                {car.imagePaths.map((path, index) => (
                 <img
                key={index}
                src={`http://localhost:8080/uploads/${path}`}
                alt={`${car.brand} ${car.model} - фото ${index + 1}`}
                className="car-image"
                />
                ))}
              </div>
            ) : (
              <div className="no-image">Нет изображений</div>
            )}
          </div>

          {/* Информация о машине */}
          <div className="car-info">
            <h2>{car.brand} {car.model}</h2>
            <p><strong>Год выпуска:</strong> {car.yearOfManufacture}</p>
            <p><strong>Цена:</strong> ${car.price.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarList;