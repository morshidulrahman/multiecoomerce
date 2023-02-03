import React from "react";
import serviceData from "../../assets/data/serviceData";
function Services() {
  return (
    <div className="container mx-auto px-6">
      <div>
        {serviceData.map((item, index) => (
          <div className="flex gap-2" key={index}>
            <p>{item.title}</p>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
