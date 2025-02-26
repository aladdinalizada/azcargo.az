import React, { useState } from "react";
import "./index.css"; // We will add some styles here

const Carousel = () => {
  const images = [
    "/carusel/1.png", // Replace with your image paths
    "/carusel/2.jpeg",
    "/carusel/3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button className="prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
