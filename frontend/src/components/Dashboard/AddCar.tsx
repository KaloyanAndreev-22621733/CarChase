import React, { FormEvent, useState } from 'react';
import ImageUploader from './ImageUpLoader';

const AddCar = () => {

  interface CarFormData {
    brand: string;
    model: string;
    yearOfManufacture: string;
    price: string;
    mileage: string;
    vinNumber: string;
  };

  const[formData, setFormData] = useState<CarFormData>(
    {
      brand: '',
      model: '',
      yearOfManufacture: '',
      price: '',
      mileage: '',
      vinNumber: '',
    }
  );

  const [mainImage, setMainImage] = useState<File | null>(null);
  const [smallImages, setSmallImages] = useState<File[]>([]);

  
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleImagesChange(images: { mainImage: File | null; smallImages: File[] }) {
    setMainImage(images.mainImage);
    setSmallImages(images.smallImages);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const form = new FormData();

    const carData = {
      brand: formData.brand,
      model: formData.model,
      yearOfManufacture: formData.yearOfManufacture,
      price: formData.price,
      mileage: formData.mileage,
      vinNumber: formData.vinNumber,
    }

    form.append("car", new Blob([JSON.stringify(carData)], {type: "application/json"}));

    if(mainImage != null) {
      form.append("images", mainImage)
    }

    smallImages.forEach((img) => {
      form.append("images", img)
    })

    console.log(JSON.stringify(carData, null, 2));

    try {
    const response = await fetch("http://localhost:8080/cars/add", {
      method: "POST",
      body: form,
    });

    if (response.ok) {
      alert("Car added");
      setFormData({
        brand: "",
        model: "",
        yearOfManufacture: "",
        price: "",
        mileage: "",
        vinNumber: "",
      });
      setMainImage(null);
      setSmallImages([]);
    } else {
      const text = await response.text();
      console.error("Server error:", text);
      alert("Error while sending data");
    }
  } catch (error) {
    console.error("Network or other error:", error);
    alert("Network error");
  }
  }

  return (
    <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Submit Listing</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 gap-4">
  <div>
    <label className="block text-sm text-gray-700 mb-1">Brand</label>
    <input
      name="brand"
      type="text"
      placeholder="Enter brand..."
      value={formData.brand}
      onChange={handleInputChange}
      className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-700 mb-1">Model</label>
    <input
      name="model"
      type="text"
      placeholder="Enter model..."
      value={formData.model}
      onChange={handleInputChange}
      className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-700 mb-1">Engine Type</label>
    <input
      name="engineType"
      type="text"
      placeholder="Enter engine type..."
      onChange={handleInputChange}
      className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-700 mb-1">Category</label>
    <input
      name="category"
      type="text"
      placeholder="Enter category..."
      onChange={handleInputChange}
      className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-700 mb-1">Horse Power</label>
    <input
      name="horsePower"
      type="number"
      placeholder="Enter horse power..."
      onChange={handleInputChange}
      className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-700 mb-1">Euro</label>
    <input
      name="euro"
      type="number"
      placeholder="Enter Euro standard..."
      onChange={handleInputChange}
      className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-700 mb-1">Gear Box</label>
    <input
      name="gearBox"
      type="text"
      placeholder="Enter gear box..."
      onChange={handleInputChange}
      className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-700 mb-1">Condition</label>
    <input
      name="condition"
      type="text"
      placeholder="Enter condition..."
      onChange={handleInputChange}
      className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-700 mb-1">Volume (cc)</label>
    <input
      name="volume"
      type="number"
      placeholder="Enter engine volume..."
      onChange={handleInputChange}
      className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-700 mb-1">Price</label>
    <input
      name="price"
      type="number"
      placeholder="Enter price..."
      value={formData.price}
      onChange={handleInputChange}
      className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-700 mb-1">Currency</label>
    <input
      name="currency"
      type="text"
      placeholder="Enter currency..."
      onChange={handleInputChange}
      className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-700 mb-1">Kilometers</label>
    <input
      name="kilometers"
      type="number"
      placeholder="Enter kilometers..."
      onChange={handleInputChange}
      className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-700 mb-1">Year</label>
    <input
      name="year"
      type="number"
      placeholder="Enter year..."
      onChange={handleInputChange}
      className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-700 mb-1">Color</label>
    <input
      name="color"
      type="text"
      placeholder="Enter color..."
      onChange={handleInputChange}
      className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-700 mb-1">Country</label>
    <input
      name="country"
      type="text"
      placeholder="Enter country..."
      onChange={handleInputChange}
      className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-700 mb-1">City</label>
    <input
      name="city"
      type="text"
      placeholder="Enter city..."
      onChange={handleInputChange}
      className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-700 mb-1">VIN Number</label>
    <input
      name="vinNumber"
      type="text"
      placeholder="Enter VIN number..."
      value={formData.vinNumber}
      onChange={handleInputChange}
      className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>
</div>

        <ImageUploader onImagesChange={handleImagesChange} />

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
}

export default AddCar;