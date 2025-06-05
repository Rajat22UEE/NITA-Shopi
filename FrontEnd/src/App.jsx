import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./Store/Slice/userLoggedInSlice"; 
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import OldProduct from "./pages/OldProduct";
import NewProduct from "./pages/NewProduct";
import AutoService from "./pages/AutoService";
import RestaurantService from "./pages/RestaurantService";
import About from "./pages/About";
import Help from "./pages/Help";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AddProduct from "./Components/AddProduct";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.login);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const response = await fetch("https://nita-shopi-backend-jo5u.onrender.com/api/v1/users/userLoggedIn", {
          method: 'GET',
          credentials: 'include',
        });
        
        const data = await response.json();
        console.log(data)
        if (data.isLoggedIn) {
          dispatch(login(data.user)); 
        } else {
          dispatch(logout()); 
        }
      } catch (error) {
        console.error("Error fetching login status:", error);
      }
    };

    checkUserLoggedIn();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/OldProduct" element={isLoggedIn?<OldProduct />:<Login/>} />
        <Route path="/NewProduct" element={isLoggedIn?<NewProduct />:<Login/>} />
        <Route path="/AutoService" element={isLoggedIn?<AutoService />:<Login/>} />
        <Route path="/RestaurantService" element={isLoggedIn?<RestaurantService />:<Login/>} />
        <Route path="/About" element={isLoggedIn?<About />:<Login/>} />
        <Route path="/Help" element={isLoggedIn?<Help />:<Login/>} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        <Route path="/AddProduct" element={isLoggedIn?<AddProduct />:<Login/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
