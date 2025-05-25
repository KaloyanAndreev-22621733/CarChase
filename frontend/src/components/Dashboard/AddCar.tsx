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
          {['brand', 'model', 'yearOfManufacture', 'price', 'mileage', 'vinNumber'].map((field) => (
            <div key={field}>
              <label className="block text-sm text-gray-700 mb-1 capitalize">{field}</label>
              <input
                name={field}
                type="text"
                placeholder={`Enter ${field}...`}
                value={(formData as any)[field]}
                onChange={handleInputChange}
                className="w-full bg-purple-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          ))}
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