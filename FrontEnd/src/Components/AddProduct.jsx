import React, { useState } from "react";
import axios from "axios";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    quantity: 1,
    category: "",
    productImage: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.productImage) {
      alert("Please upload an image!");
      return;
    }
  
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("quantity", formData.quantity);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("productImage", formData.productImage);
  
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/product/addProduct",
        formDataToSend,
        {
          withCredentials: true, // Send cookies with the request
          headers: {
            // DO NOT manually set "Content-Type" for FormData
          },
        }
      );
  
      if (response.status === 200) {
        alert("Product uploaded successfully!");
        setFormData({
          name: "",
          price: "",
          description: "",
          quantity: 1,
          category: "",
          productImage: null,
        });
      }
    } catch (error) {
      console.error("Error uploading product:", error.response?.data);
      alert(error.response?.data?.message || "Product upload failed!");
    }
  };
  

  return (
    <div className="flex justify-center items-center bg-yellow-100 ">
      <div className="border-green-600 border-2 rounded-lg h-auto w-[600px] my-8 bg-green-200 shadow-xl shadow-green-800">
        <form onSubmit={handleSubmit} className="p-4">
          <div className="flex items-start justify-center border-4 bg-green-800 w-full p-2 rounded-3xl">
            <h1 className="text-3xl font-bold text-center">ADD YOUR PRODUCT</h1>
          </div>
          <br />

          <div className="flex flex-row items-center gap-4">
            <div className=" text-gray-700 rounded-lg px-4 py-2 w-40 h-12 flex items-center justify-center font-medium ">
              Product Name:
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-3 py-2 w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
            />
          </div>

          <div className="flex flex-row gap-6 items-center">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">
                Product Price:
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-3 py-2 w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">
                Category:
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-3 py-2 w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">
              Product Description:
            </label>
            <textarea
              name="description"
              rows="5"
              cols="30"
              placeholder="Enter description about the product"
              value={formData.description}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Upload Image:</label>
            <input
              type="file"
              name="productImage"
              onChange={handleChange}
               accept="image/*"
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
            />
          </div>

          <div className="flex flex-row items-center gap-6 my-4">
            <div className="flex items-center gap-2">
              <label className="text-gray-700 font-medium">Quantity</label>
              <input
                type="number"
                name="quantity"
                onChange={handleChange}
                className="w-[100px] h-[30px] text-blue-600 border-gray-300 focus:ring-blue-500"
                min="1"
                max="200"
                step="1"
                value={formData.quantity} // Bind the input value to state
              />
            </div>
          </div>
          <div className="flex flex-col my-6">
            <label className="text-gray-700 font-medium">Purchase Date</label>
            <input
              type="date"
              name="purchaseDate"
              value={formData.purchaseDate}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 mt-4 w-[300px] rounded-lg "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
