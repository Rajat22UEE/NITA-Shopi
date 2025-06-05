import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const { token } = useParams(); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.put(
        `https://nita-shopi-backend-jo5u.onrender.com/api/v1/users/resetPassword/${token}`, 
        { password: formData.password } // ✅ Send password in body
      );

      alert(response.data.message || "Password changed successfully");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
      <div className="h-[400px] w-[500px] flex flex-col justify-start items-start border-4 border-black bg-blue-100 p-4 shadow-2xl rounded-md">
        {/* Header */}
        <div className="flex items-start justify-center border-4 bg-blue-600 w-full p-2 rounded-3xl">
          <h1 className="text-3xl font-bold text-center">RESET PASSWORD</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col justify-center mt-4 w-full">
          <div className="flex flex-row items-center w-full mt-2">
            <FaLock size={40} className="mr-2" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 border border-gray-400 flex-grow"
              placeholder="Enter new password"
              required
            />
          </div>

          <div className="flex flex-row items-center w-full mt-2">
            <FaLock size={40} className="mr-2" />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="p-2 border border-gray-400 flex-grow"
              placeholder="Confirm password"
              required
            />
          </div>

          <div className="flex items-start justify-center border-4 bg-blue-600 w-full p-2 my-5 hover:bg-blue-700">
            <button type="submit" className="text-3xl font-bold text-center text-black hover:text-white py-2 px-4">
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
