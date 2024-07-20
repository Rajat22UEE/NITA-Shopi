import React, { useState } from 'react';

const AutoService = () => {
  const autos = [
    { autoNumber: 'TR01D1234', driverNumber: '+91 1234567890' },
    { autoNumber: 'TR02D5678', driverNumber: '+91 0987654321' },
    { autoNumber: 'TR03D9101', driverNumber: '+91 1111111111' },
    { autoNumber: 'TR04D1121', driverNumber: '+91 2222222222' },
    { autoNumber: 'TR05D3141', driverNumber: '+91 3333333333' },
    { autoNumber: 'TR06D5161', driverNumber: '+91 4444444444' },
    { autoNumber: 'TR07D7181', driverNumber: '+91 5555555555' },
    { autoNumber: 'TR08D9202', driverNumber: '+91 6666666666' },
    { autoNumber: 'TR09D1222', driverNumber: '+91 7777777777' },
    { autoNumber: 'TR10D3242', driverNumber: '+91 8888888888' },
    { autoNumber: 'TR11D5262', driverNumber: '+91 9999999999' },
    { autoNumber: 'TR12D7282', driverNumber: '+91 0000000000' }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = autos.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(autos.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages ? prev : prev + 1));
  };

  return (
    <div className="mx-auto">
      {/* Banner */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <img
          src="https://via.placeholder.com/1200x400"
          alt="Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Welcome to Auto Service</h1>
          <p className="mt-4 text-xl md:text-2xl lg:text-3xl">Your trusted auto driver service.</p>
          <p className="mt-2 text-lg md:text-xl lg:text-2xl italic">"Reliable and quick auto rides at your service"</p>
        </div>
      </div>

      {/* Headline */}
      <h2 className="mt-8 text-3xl font-bold text-center">Auto Service</h2>

      {/* Cards */}
      <div className="mt-8 container mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentItems.map((auto, index) => (
          <div
            key={index}
            className="bg-[#FFFAF0] hover:bg-[#FFF4E1] rounded-lg shadow-2xl overflow-hidden border-b-4 border-green-600 transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={`https://via.placeholder.com/300x200?text=${auto.autoNumber}`}
              alt={auto.autoNumber}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Auto Number: {auto.autoNumber}</h3>
              <p className="mt-2 text-gray-600">Driver Number: {auto.driverNumber}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-200 disabled:opacity-50 disabled:hover:bg-gray-300"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-200 disabled:opacity-50 disabled:hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AutoService;
