import React, { FormEvent, useState, useCallback, useEffect } from 'react';
import ImageUploader from './ImageUpLoader';
import { useNavigate } from 'react-router-dom';

const AddCar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Проверяем аутентификацию при загрузке компонента
    fetch('http://localhost:8080/app/cars/check-auth', {
      credentials: 'include' // Важно для отправки куки
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Not authenticated');
      }
      return response.json();
    })
    .then(isAuthenticated => {
      if (!isAuthenticated) {
        navigate('/auth/login');
      }
    })
    .catch(() => {
      navigate('/auth/login');
    });
  }, [navigate]);

  interface CarFormData {
    brand: string;
    model: string;
    engineType: string;
    category: string;
    horsePower: string;
    euro: string;
    gearBox: string;
    condition: string;
    volume: string;
    price: string;
    currency: string;
    kilometers: string;
    year: string;
    color: string;
    country: string;
    city: string;
    vinNumber: string;
  }

  const [formData, setFormData] = useState<CarFormData>({
    brand: '',
    model: '',
    engineType: '',
    category: '',
    horsePower: '',
    euro: '',
    gearBox: '',
    condition: '',
    volume: '',
    price: '',
    currency: '',
    kilometers: '',
    year: '',
    color: '',
    country: '',
    city: '',
    vinNumber: ''
  });

  const [mainImage, setMainImage] = useState<File | null>(null);
  const [smallImages, setSmallImages] = useState<File[]>([]);

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleImagesChange = useCallback((images: { mainImage: File | null; smallImages: File[] }) => {
    setMainImage(images.mainImage);
    setSmallImages(images.smallImages);
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const form = new FormData();

    // Add each field separately to FormData
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    // Add images
    if (mainImage) {
      form.append('images', mainImage);
    }

    smallImages.forEach((img) => {
      form.append('images', img);
    });

    try {
      const response = await fetch('http://localhost:8080/app/profile/submit-car', {
        method: 'POST',
        body: form,
        credentials: 'include' // Важно для отправки куки
      });

      if (response.ok) {
        alert('Car added successfully');
        navigate('/profile');
      } else if (response.status === 401) {
        navigate('/auth/login');
      } else {
        const text = await response.text();
        console.error('Server error:', text);
        alert('Error while sending data');
      }
    } catch (error) {
      console.error('Network or other error:', error);
      alert('Network error');
    }
  }

  // Options for select fields
  const conditions = ['New', 'Used', 'Certified Pre-Owned'];
  const engineTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
  const gearboxTypes = ['Manual', 'Automatic', 'Semi-Automatic'];
  const categories = ['Sedan', 'SUV', 'Coupe', 'Hatchback', 'Wagon', 'Van', 'Truck'];
  const currencies = ['USD', 'EUR', 'GBP'];

  return (
    <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow mt-20">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Submit Listing</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Brand*</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Model*</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Engine Type*</label>
            <select
              name="engineType"
              value={formData.engineType}
              onChange={(e) => handleInputChange(e as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Engine Type</option>
              {engineTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
            <select
              name="category"
              value={formData.category}
              onChange={(e) => handleInputChange(e as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Category</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Horse Power*</label>
            <input
              type="number"
              name="horsePower"
              value={formData.horsePower}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Euro Standard*</label>
            <input
              type="number"
              name="euro"
              value={formData.euro}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="1"
              max="6"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gearbox*</label>
            <select
              name="gearBox"
              value={formData.gearBox}
              onChange={(e) => handleInputChange(e as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Gearbox</option>
              {gearboxTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Condition*</label>
            <select
              name="condition"
              value={formData.condition}
              onChange={(e) => handleInputChange(e as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Condition</option>
              {conditions.map(condition => (
                <option key={condition} value={condition}>{condition}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Engine Volume (L)*</label>
            <input
              type="number"
              name="volume"
              value={formData.volume}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              step="0.1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price*</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Currency*</label>
            <select
              name="currency"
              value={formData.currency}
              onChange={(e) => handleInputChange(e as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Currency</option>
              {currencies.map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kilometers*</label>
            <input
              type="number"
              name="kilometers"
              value={formData.kilometers}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Year*</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="1900"
              max={new Date().getFullYear()}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Color*</label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country*</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">VIN Number*</label>
            <input
              type="text"
              name="vinNumber"
              value={formData.vinNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <ImageUploader onImagesChange={handleImagesChange} />
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;