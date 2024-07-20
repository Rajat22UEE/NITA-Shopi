import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RestaurantService = () => {
  const restaurants = [
    { id: 1, name: 'Restaurant 1', description: 'Description 1', image: 'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg', status: 'Available', phone: '123-456-7890' },
    { id: 2, name: 'Restaurant 2', description: 'Description 2', image: 'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg', status: 'Unavailable', phone: '098-765-4321' },
    { id: 1, name: 'Restaurant 1', description: 'Description 1', image: 'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg', status: 'Available', phone: '123-456-7890' },
    { id: 2, name: 'Restaurant 2', description: 'Description 2', image: 'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg', status: 'Unavailable', phone: '098-765-4321' },
    { id: 1, name: 'Restaurant 1', description: 'Description 1', image: 'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg', status: 'Available', phone: '123-456-7890' },
    { id: 2, name: 'Restaurant 2', description: 'Description 2', image: 'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg', status: 'Unavailable', phone: '098-765-4321' },
    { id: 1, name: 'Restaurant 1', description: 'Description 1', image: 'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg', status: 'Available', phone: '123-456-7890' },
    { id: 2, name: 'Restaurant 2', description: 'Description 2', image: 'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg', status: 'Unavailable', phone: '098-765-4321' },
    { id: 1, name: 'Restaurant 1', description: 'Description 1', image: 'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg', status: 'Available', phone: '123-456-7890' },
    { id: 2, name: 'Restaurant 2', description: 'Description 2', image: 'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg', status: 'Unavailable', phone: '098-765-4321' },
    { id: 1, name: 'Restaurant 1', description: 'Description 1', image: 'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg', status: 'Available', phone: '123-456-7890' },
    { id: 2, name: 'Restaurant 2', description: 'Description 2', image: 'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg', status: 'Unavailable', phone: '098-765-4321' },
    { id: 1, name: 'Restaurant 1', description: 'Description 1', image: 'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg', status: 'Available', phone: '123-456-7890' },
    { id: 2, name: 'Restaurant 2', description: 'Description 2', image: 'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg', status: 'Unavailable', phone: '098-765-4321' },
    { id: 1, name: 'Restaurant 1', description: 'Description 1', image: 'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg', status: 'Available', phone: '123-456-7890' },
    { id: 2, name: 'Restaurant 2', description: 'Description 2', image: 'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg', status: 'Unavailable', phone: '098-765-4321' },
    // Add more restaurant data as needed
  ];

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRestaurants = restaurants.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="relative w-full h-64 lg:h-96">
        <img src="https://via.placeholder.com/1200x400" alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-black">
          <h1 className="text-4xl font-bold">Top Heading</h1>
          <h2 className="text-3xl">Medium Heading</h2>
          <h3 className="text-2xl">Small Heading</h3>
        </div>
      </div>
      <h1 className="text-center text-3xl my-8">Restaurant Service</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {currentRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="border rounded-lg shadow-lg p-4">
            <Link to={`/restaurant/${restaurant.id}`}>
              <img src={restaurant.image} alt={restaurant.name} className="w-full h-32 object-cover rounded-t-lg" />
              <h2 className="text-xl font-bold mt-4">{restaurant.name}</h2>
              <p className="text-sm mt-2">{restaurant.description}</p>
              <p className="text-sm mt-2">{restaurant.status}</p>
              <p className="text-sm mt-2">{restaurant.phone}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-8">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">
          Previous
        </button>
        <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= restaurants.length} className="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default RestaurantService;
