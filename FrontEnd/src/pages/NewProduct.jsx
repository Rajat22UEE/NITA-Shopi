import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import { Link } from 'react-router-dom'


const NewProduct = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);


  async function fetchProducts() {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/product/getAllProduct`,{
          method: "GET",
          credentials: "include",
        });
        
       
      const result = await response.json(); 
      console.log(result); 
      setProducts(result.data); 
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
       {products.map((product) => (
        <Card
          key={product.id}
          product_name={product.name}
          product_price={product.price}
          product_Owner="Default Owner" 
          product_image={product.image} 
          product_quantity={product.quantity} 
        />
      ))} 

      <div className="w-full flex justify-around mt-6">
        
        {count>0?<button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        onClick={()=>setCount(count-1)}
        >Previous</button>:null}
        { 
        count<10?<button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
        >
          Next
        </button>:null
        }
        <Link to="/AddProduct">
        <button>Add Product</button>
        </Link>
      </div>
    </div>
  );
};

export default NewProduct;
