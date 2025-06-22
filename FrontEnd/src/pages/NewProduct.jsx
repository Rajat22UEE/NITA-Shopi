import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import { Link } from 'react-router-dom';

const NewProduct = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://nita-shopi-backend-jo5u.onrender.com/api/v1/product/getNewProduct`, 
        {
          method: "GET",
          credentials: "include",
        }
      );
      
      const result = await response.json(); 
      setProducts(result.data || []);
      setTotalPages(result.totalPages || 0);
    } catch (error) {
      console.log('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Brand New Products
      </h2>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            <p className="mt-4 text-gray-600 font-medium">Discovering amazing products...</p>
          </div>
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">🛍️</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">No new products available</h3>
          <p className="text-gray-600 mb-6">Check back later for exciting new arrivals!</p>
          <Link 
            to="/" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors inline-block"
          >
            Browse All Products
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                product_name={product.name}
                product_price={product.price}
                product_Owner={product.owner || "Verified Seller"}
                product_image={product.image} 
                product_quantity={product.quantity} 
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-4">
            <button
              className={`px-5 py-2 rounded-lg shadow-md transition-all duration-300 flex items-center ${
                count > 0
                  ? "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              onClick={() => setCount(Math.max(0, count - 1))}
              disabled={count === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Previous
            </button>

            <div className="bg-gray-200 px-4 py-2 rounded-lg flex items-center">
              <span className="text-gray-700 font-medium">
                Page {count + 1} {totalPages > 0 && `of ${totalPages}`}
              </span>
            </div>

            <button
              className={`px-5 py-2 rounded-lg shadow-md transition-all duration-300 flex items-center ${
                count < totalPages - 1
                  ? "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              onClick={() => setCount(count + 1)}
              disabled={count >= totalPages - 1}
            >
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </>
      )}
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NewProduct;