import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemRestaurant = () => {
  const { id } = useParams(); // Get the restaurant ID from the URL params
  const [restaurant, setRestaurant] = useState(null);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Assuming you have an API or function to fetch restaurant details by ID
    // For demonstration, we're using static data
    const fetchRestaurant = (id) => {
      const restaurants = [
        {
          id: 1,
          name: 'Restaurant 1',
          description: 'This is a description of Restaurant 1.',
          menu: [
            { id: 1, name: 'Item 1', price: '$10', image: 'https://via.placeholder.com/150' },
            { id: 2, name: 'Item 2', price: '$15', image: 'https://via.placeholder.com/150' },
            // Add more menu items as needed
          ],
        },
        {
          id: 2,
          name: 'Restaurant 2',
          description: 'This is a description of Restaurant 2.',
          menu: [
            { id: 3, name: 'Item 3', price: '$20', image: 'https://via.placeholder.com/150' },
            { id: 4, name: 'Item 4', price: '$25', image: 'https://via.placeholder.com/150' },
            // Add more menu items as needed
          ],
        },
      ];

      return restaurants.find((restaurant) => restaurant.id === parseInt(id));
    };

    setRestaurant(fetchRestaurant(id));
  }, [id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMenuItems = restaurant.menu.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="relative w-full h-64">
        <img src="https://via.placeholder.com/1200x400" alt="Restaurant" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center text-white px-4 bg-black bg-opacity-50">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold">{restaurant.name}</h1>
            <p className="text-xl mt-2">{restaurant.description}</p>
          </div>
        </div>
      </div>
      <h2 className="text-center text-3xl my-8">Restaurant Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {currentMenuItems.map((item) => (
          <div key={item.id} className="border rounded-lg shadow-lg p-4">
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">{item.name}</h3>
            <p className="text-lg mt-2">{item.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-8">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">
          Previous
        </button>
        <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= restaurant.menu.length} className="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default ItemRestaurant;
