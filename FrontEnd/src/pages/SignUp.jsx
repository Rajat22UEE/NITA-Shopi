import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import axios from 'axios'
import { BrowserRouter as Router, Route, Link,useNavigate } from "react-router-dom"; 

function App() {
  const navigate=useNavigate()

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    phonenumber:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form data being sent:", formData);

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        {
          fullname:formData.name,
          email: formData.email,
          phonenumber:formData.phonenumber,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );

      if (data) {
        console.log("User Registered Successful:", data);
        alert("User Registered successfully!");
        navigate("/login");
      }
    } catch (error) {
      console.error(
        "Registration Error:",
        error.response?.data?.message || error.message
      );
      alert("Regsitration failed: " + (error.response?.data?.message || error.message));
    }
  };
  

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
      <div className="h-[600px] w-[500px] flex flex-col justify-start items-start border-4 border-black bg-blue-100 p-4 shadow-2xl rounded-md">
        {/* Header start */}
        <div className="flex items-start justify-center border-4 bg-blue-600 w-full p-2 rounded-3xl">
          <h1 className="text-3xl font-bold text-center">CREATE AN ACCOUNT</h1>
        </div>
        {/* Header End */}
        <form onSubmit={handleSubmit} className="flex flex-col justify-center mt-4 w-full">
          {/* Name Input */}
          <div className="flex flex-col justify-center mt-4 w-full">
            <div className="flex flex-row items-center w-full mt-2">
              <IoPerson size={40} className="mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border border-gray-400 flex-grow"
                placeholder="Enter your Full Name"
              />
            </div>
          </div>
          {/* Email Input */}
          <div className="flex flex-col justify-center mt-4 w-full">
            <div className="flex flex-row items-center w-full mt-2">
              <MdEmail size={40} className="mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-400 flex-grow"
                placeholder="Enter your email"
              />
            </div>
          </div>
           {/* Phone Number Input */}
           <div className="flex flex-col justify-center mt-4 w-full">
            <div className="flex flex-row items-center w-full mt-2">
              <FaLock size={40} className="mr-2" />
              <input
                type="text"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                className="p-2 border border-gray-400 flex-grow"
                placeholder="Enter your Phone Number"
              />
            </div>
          </div>
          {/* Password Input */}
          <div className="flex flex-col justify-center mt-4 w-full">
            <div className="flex flex-row items-center w-full mt-2">
              <FaLock size={40} className="mr-2" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="p-2 border border-gray-400 flex-grow"
                placeholder="Enter a Password"
              />
            </div>
          </div>
         
          {/* Sign-Up Button */}
          <div className="flex items-start justify-center border-4 bg-blue-600 w-full p-2 my-5 hover:bg-blue-700">
            <button type="submit" className="text-3xl font-bold text-center text-black hover:text-white py-2 px-4 ">
              Sign-Up
            </button>
          </div>
        </form>
        {/* Already have an Account Link */}
        <div className="flex flex-row items-center justify-center mt-4 w-full">
          <p>Already have an Account?</p>
          <div>
            <Link to="/Login">
              <button className="text-xl font-semibold underline ml-2">
                Login
              </button>
            </Link>
          </div>
        </div>
        {/* Ending End*/}
      </div>
    </div>
  );
}

export default App;
