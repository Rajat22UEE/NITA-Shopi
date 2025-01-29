import React from "react";

const RestaurantsCard = ({
  image,
  title,
  description,
  location,
  phonenumber,
  homedelivery,
}) => {
  return (
    <div className="h-[400px] w-full max-w-4xl border-2 border-gray-200 mx-auto flex flex-row justify-between p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white my-11">
      {/* Image Section */}
      <div className="flex justify-center items-center w-1/3 rounded-xl overflow-hidden">
        <img
          src={image}
          className="rounded-xl object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
          alt={title}
        />
      </div>

      {/* Restaurant Information */}
      <div className="flex flex-col justify-center w-1/3 px-6 text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Contact & Button Section */}
      <div className="flex flex-col justify-center items-center w-1/3 space-y-6">
        <div className="text-center">
          <h1 className="font-semibold text-xl text-gray-800 mb-2">
            Contact Details
          </h1>
          <h2 className="text-lg text-green-700">
            Location: <span className="text-gray-600">{location}</span>
          </h2>
          <h2 className="text-lg text-green-700">
            Phone: <span className="text-gray-600">{phonenumber}</span>
          </h2>
        </div>
        <button
          className={`${
            homedelivery ? "bg-green-800" : "bg-red-700"
          } text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg`}
        >
          {homedelivery?"Home Delivery Available":"Home delivery Not Vailable"}
        </button>
      </div>

    </div>
  );
};

export default RestaurantsCard;
