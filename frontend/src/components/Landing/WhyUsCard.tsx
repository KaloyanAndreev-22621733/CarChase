import React from 'react';

interface WhyUsCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className=" p-4 flex flex-col items-start space-y-3">
      <img src={iconSrc} alt={title} className="w-10 h-10 object-contain" />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default WhyUsCard;