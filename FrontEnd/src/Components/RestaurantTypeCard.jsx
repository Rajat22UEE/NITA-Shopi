import React from 'react'

const RestaurantTypeCard = ({image,title,description}) => {
  return (
    <div className="flex justify-center items-center shadow-xl shadow-[#6BA01C] ">
  <div className="h-[300px] w-[300px] border-2 border-green-700 bg-yellow-100 hover:bg-yell p-4 rounded-xl flex flex-col items-center">
   
    <div className="w-[150px] h-[150px] overflow-hidden rounded-full mb-4">
      <img 
        src={image}
        alt="South Indian Dishes" 
        className="w-full h-full object-cover" 
      />
    </div>
    
    
    <div className="text-xl font-semibold text-center mb-2">{title}</div>
    
    <div className="text-sm text-center text-gray-700">
      {description}
    </div>
  </div>
</div>

  )
}

export default RestaurantTypeCard
