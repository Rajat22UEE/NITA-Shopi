import React, { useState } from "react";

const Card = ({
  product_name,
  product_price,
  product_Owner,
  product_image,
  product_quantity,
}) => {
  const [popup, setpopup] = useState(false);
  function handleClick() {
    setpopup(!popup);
    console.log("Clicked");
  }
  return (
    <div className="flex flex-col items-center p-4">
      {!popup && (
        <div className="h-[450px] w-[300px] border border-gray-300 shadow-lg bg-white rounded-lg overflow-hidden">
          <img
            src={product_image}
            alt={product_name}
            className="h-[250px] w-full object-cover"
          />

          <div className="p-4 flex flex-col gap-2">
            <h1 className="text-lg font-bold text-gray-800 text-center">
              {product_name}
            </h1>
            <p className="text-sm text-gray-600">
              Price:{" "}
              <span className="font-semibold text-green-600">
                Rs: {product_price}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              Owner: <span className="font-medium">{product_Owner}</span>
            </p>
            <p className="text-sm text-gray-600">
              Quantity: <span className="font-medium">{product_quantity}</span>
            </p>
            <div className="flex flex-row-reverse text-white ">
              <button
                className="bg-green-600 rounded-xl px-4 py-1 hover:bg-green-800"
                onClick={handleClick}
              >
                Contact Details
              </button>
            </div>
          </div>
        </div>
      )}
      {popup && (
        <div className="h-[450px] w-[300px] border border-gray-300 shadow-lg bg-white rounded-lg overflow-hidden">
           <div className="h-full flex flex-col justify-center items-center p-4">
            <h1 className="text-lg font-bold text-gray-800 text-center mb-4">
              Contact Details
            </h1>
            <p className="text-sm text-black-600">
              Product Name:{" "}
              <span className="font-semibold text-green-600">
                {product_name}
              </span>
            </p>
            <p className="text-sm text-black-600">
              Owner: <span className="font-medium">Amit Chowdhury</span>
            </p>
            <p className="text-sm text-black-600">
              Phone Number: <span className="font-medium">+916969696969</span>
            </p>
            <p className="text-sm text-black-600">
              Gmail: <span className="font-medium">amit69@gmail.com</span>
            </p>
            <div className="flex flex-row-reverse text-white mt-4">
              <button
                className="bg-green-600 rounded-xl px-4 py-1 hover:bg-green-800"
                onClick={handleClick}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
