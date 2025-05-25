import React from 'react';
import ImageUploader from './ImageUpLoader';

const AddCar = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Submit Listing</h1>

      <form className="space-y-6">
        {/* Поля формы */}
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Brand</label>
            <input
              type="text"
              placeholder="Enter Brand..."
              className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Model</label>
            <input
              type="text"
              placeholder="Enter Model..."
              className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Year of manufacture</label>
            <input
              type="text"
              placeholder="Enter Year of manufacture..."
              className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Price</label>
            <input
              type="text"
              placeholder="Enter Price..."
              className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Mileage</label>
            <input
              type="text"
              placeholder="Enter Mileage..."
              className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Vin Number</label>
            <input
              type="text"
              placeholder="Enter Vin Number..."
              className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Компонент загрузки изображения */}
        <ImageUploader />

        {/* Кнопка отправки */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-purple-700 text-white py-2 px-6 rounded hover:bg-purple-800 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;