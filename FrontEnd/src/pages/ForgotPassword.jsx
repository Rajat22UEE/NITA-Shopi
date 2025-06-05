import { useState } from "react";
import { MdEmail } from "react-icons/md";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.put("https://nita-shopi-backend-jo5u.onrender.com/api/v1/users/forgotPassword", { email });
      setMessage(res.data.message || "Check your email for the reset link!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
      <div className="h-[400px] w-[500px] flex flex-col justify-start items-start border-4 border-black bg-blue-100 p-4 shadow-2xl rounded-md">
       
        <div className="flex items-start justify-center border-4 bg-blue-600 w-full p-2 rounded-3xl">
          <h1 className="text-3xl font-bold text-center">FORGOT PASSWORD</h1>
        </div>

        
        <form onSubmit={handleSubmit} className="flex flex-col justify-center mt-4 w-full">
          <div className="flex flex-row items-center w-full mt-2">
            <MdEmail size={40} className="mr-2" />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-400 flex-grow"
              placeholder="Enter your email"
              required
            />
          </div>

         
          <div className="flex items-start justify-center border-4 bg-blue-600 w-full p-2 my-5 hover:bg-blue-700">
            <button
              type="submit"
              className={`text-3xl font-bold text-center text-black hover:text-white py-2 px-4 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </div>

       
          {message && <p className="text-center text-red-500">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
