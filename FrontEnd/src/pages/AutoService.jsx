import React, { useState } from "react";
import TwoWheeler from "../Components/TwoWheeler";
import ThreeWheeler from "../Components/ThreeWheeler";
import Carousel from "../Components/Carousel";
import Cars from "../Components/Cars";
import Bus from "../Components/Bus";


const AutoService = () => {
  const [index, setIndex] = useState(0);
  const components = [<TwoWheeler />, <ThreeWheeler />,<Bus/>,<Cars/>];
  const options = ["Two Wheeler", "Three Wheeler", "Bus Service", "Cars"];

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-sky-200 to-sky-100 min-h-screen py-10">
      {/* Split Section: Text on the Left and Carousel on the Right */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl px-6 gap-8">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6">
          <h1
            className="text-4xl font-extrabold text-green-800"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            Discover diverse services for your convenience.
          </h1>
          <p className="text-lg font-light text-slate-600">
            Choose from a variety of services such as two-wheelers, three-wheelers, bus services, and more. 
            Enjoy seamless transportation and make your journeys easier!
          </p>
        </div>

        {/* Right Side - Carousel */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-md">
            <Carousel />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 px-4">
        {options.map((option, idx) => (
          <button
            key={idx}
            className={`w-[180px] h-[60px] shadow-lg text-white text-lg font-semibold flex justify-center items-center rounded-lg 
              hover:bg-blue-900 hover:shadow-blue-300 transition-all duration-300 ease-in-out hover:scale-105
              ${index === idx ? "bg-gray-800" : "bg-blue-800"}`}
            onClick={() => setIndex(idx)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Service Components */}
      <div className="w-full flex justify-center mt-10 h-[300px]">
        <div className="w-full max-w-7xl px-6">
          {components[index]}
        </div>
      </div>
    </div>
  );
};

export default AutoService;