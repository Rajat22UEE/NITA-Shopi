import React, { useState, useEffect } from "react";
import { FaArrowCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const slides = [
  
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4778f757387331.59d3e4f73f8b3.gif",
  'https://c.tenor.com/zzCC-KueulAAAAAC/cars-lightning-mcqueen.gif',
  "https://i.pinimg.com/originals/d4/3c/11/d43c11d76c7db33af616426597e88833.gif"
];

export default function Carousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container relative w-full overflow-hidden">
      <div
        className="carousel-slides"
        style={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(-${currentSlideIndex * 100}%)`,
          width: "100%", // Ensures the container takes up the full width
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide w-full flex-shrink-0">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ borderRadius: "1rem" }}
            />
          </div>
        ))}
      </div>

      <div className="carousel-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button onClick={goToPrevSlide}>
          <FaArrowAltCircleLeft size={30} />
        </button>
      </div>

      <div className="carousel-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button onClick={goToNextSlide}>
          <FaArrowCircleRight size={30} />
        </button>
      </div>
    </div>
  );
}
