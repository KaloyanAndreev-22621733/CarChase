import React from "react";

interface CarTypeCardProps {
  image: string;   // сюда передаётся импортированное изображение
  label: string;
  title: string;
}

const CarTypeCard: React.FC<CarTypeCardProps> = ({ image, label, title }) => {
  return (
    <div className="w-50 h-60 rounded-xl overflow-hidden relative shadow-md hover:scale-105 hover:shadow-xl cursor-pointer group">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-2 left-2 text-white text-xs">{label}</div>
      <div className="absolute top-6 left-2 text-white font-semibold text-lg">{title}</div>
    </div>
  );
};

export default CarTypeCard;