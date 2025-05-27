import React from "react";
import CarTypeCard from "./CarTypeCard";
import Car1 from "../../images/Car1.png";
import Car2 from "../../images/Car2.png";
import Car3 from "../../images/Car3.png";
import Car4 from "../../images/Car4.png";
import Car5 from "../../images/Car5.png";

function BrowseType() {
  return (
    <div className="w-full py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <h1 className="font-medium text-3xl mb-6">Browse by Type</h1>

        {/* Сетка карточек */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <CarTypeCard image={Car1} label="3 Cars" title="SUV" />
          <CarTypeCard image={Car2} label="5 Cars" title="Sedan" />
          <CarTypeCard image={Car3} label="2 Cars" title="Coupe" />
          <CarTypeCard image={Car4} label="6 Cars" title="Truck" />
          <CarTypeCard image={Car5} label="4 Cars" title="Convertible" />
        </div>
      </div>
    </div>
  );
}

export default BrowseType;

