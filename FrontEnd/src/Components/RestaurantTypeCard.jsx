import React from 'react';

const RestaurantTypeCard = ({ image, title, description }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-[350px] w-[300px] border-2 border-green-700 bg-white hover:bg-green-50 transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl rounded-xl flex flex-col items-center p-6 transform hover:scale-105">
       
        <div className="w-[150px] h-[150px] overflow-hidden rounded-full mb-6 border-4 border-green-200">
          <img 
            src={image}
            alt="South Indian Dishes" 
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" 
          />
        </div>
        

        <div className="text-2xl font-bold text-green-800 text-center mb-3">
          {title}
        </div>
        
        
        <div className="text-sm text-center text-gray-600 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

export default RestaurantTypeCard;