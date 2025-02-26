import React, { useEffect, useState } from "react";
import "./index.css";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Əgər `public` qovluğundadırsa
      .then((response) => response.json())
      .then((data) => setServices(data.services))
      .catch((error) => console.error("JSON yüklənmə xətası:", error));
  }, [setServices]);

  return (
    <div className="servicesContainer">
      <h2 className="sectionName">Xidmətlərimiz</h2>
      <div className="cards">
        {services.map((service) => (
          <div key={service.id} className="card">
            <img
              src={service.ImageUrl}
              alt={service.title}
              className="coverimage"
            />
            <div className="title">
              <div
                dangerouslySetInnerHTML={{ __html: service.Icon }}
                className="icon"
              />
              <h2>{service.title}</h2>
            </div>
            {/* <p className="desc">{service.desc}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
