import React, { useState } from "react";
import RestaurantTypeCard from "../Components/RestaurantTypeCard";
import RestaurantsCard from "../Components/RestaurantsCard";

const RestaurantService = () => {
  const type = [
    {
      title: "South Indian Dishes",
      description:
        "Far away from home, explore South Indian indigenous foods at a minimal cost.",
      image:
        "https://www.archanaskitchen.com/images/archanaskitchen/0-Affiliate-Articles/RESTAURANT_STYLE_SOUTH_INDIAN_THALI_original.jpg",
    },
    {
      title: "North Indian Dishes",
      description: "Feel the evening with Chole Bhature and Paneer paraths.",
      image:
        "https://static.vecteezy.com/system/resources/previews/036/627/131/original/ai-generated-realistic-chole-bhature-on-transparent-background-png.png",
    },
    {
      title: "Tripura Dishes",
      description:
        "Experience the unique flavors of Tripura, with dishes like Mui Borok and Bamboo Shoot Curry.",
      image:
        "https://th.bing.com/th/id/OIP.ztZpfgJrC1KzKzEY5-UFLAHaFi?rs=1&pid=ImgDetMain",
    },
    {
      title: "Bengali Foods",
      description:
        "Indulge in traditional Bengali flavors with dishes like Fish Curry and Rosogolla.",
      image:
        "https://th.bing.com/th/id/OIP.0L8Oo-I3bkW6JFqauHHR4AHaGa?rs=1&pid=ImgDetMain",
    },
  ];

  const shops = [
    {
      title: "Khackchang Restaurant",
      description:
        "Khakchawng Restaurant offers a variety of delicious dishes with a cozy atmosphere. Experience amazing food and exceptional service at affordable prices.",
      image:
        "https://th.bing.com/th/id/OIP.Mt8p1g9AkRUyK8RMqNhCsAHaEJ?rs=1&pid=ImgDetMain",
      phonenumber: "990099009",
      homedelivery: true,
      location: "Shopping complex",
      category: "Restaurants",
    },
    {
      title: "MJ Restaurant",
      description:
        "Mj restaurants special for our chicken items enjoy the birthday party of your loved one with the delicious chicken items from our Restaurant.",
      image:
        "https://th.bing.com/th/id/OIP.Mt8p1g9AkRUyK8RMqNhCsAHaEJ?rs=1&pid=ImgDetMain",
      phonenumber: "990099009",
      homedelivery: true,
      location: "Shopping complex",
      category: "Restaurants",
    },
    {
      title: "Masi Hotel",
      description:
        "Miss the food like home enjoy the homely foods in my hotel with very affordable prices.",
      image:
        "https://th.bing.com/th/id/OIP.Mt8p1g9AkRUyK8RMqNhCsAHaEJ?rs=1&pid=ImgDetMain",
      phonenumber: "990099009",
      homedelivery: false,
      location: "Shopping complex",
      category: "Misc",
    },
  ];

  const [category, setCategory] = useState(1);
  const [value, setValue] = useState(shops);

  function handleClickAll() {
    setCategory(1);
    setValue(shops);
  }

  function handleClickRestaurants() {
    setCategory(2);
    const filteredShops = shops.filter((s) => s.category === "Restaurants");
    setValue(filteredShops);
  }

  function handleClickMisc() {
    setCategory(4);
    const filteredShops = shops.filter((s) => s.category === "Misc");
    setValue(filteredShops);
  }

  function handleClickTiffin() {
    setCategory(3);
    const filteredShops = shops.filter((s) => s.category === "Tiffin");
    setValue(filteredShops);
  }

  return (
    <div className="w-full m-0 p-0 bg-gradient-to-b from-yellow-50 to-yellow-100">
      {/* Header - Enhanced with shadows and gradients */}
      <div className="flex flex-col-reverse md:flex-row w-full h-full px-4 md:px-10 py-10 gap-8 bg-gradient-to-r from-amber-100 to-yellow-50 shadow-md">
        <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center">
          <h1 
            className="text-3xl md:text-5xl font-extrabold text-green-800 leading-tight"
            style={{ 
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              background: "linear-gradient(to right, #1a5e1a, #2d7a2d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Discover diverse cuisines and create memories with loved ones.
          </h1>
          <p className="text-md md:text-lg text-slate-700 leading-relaxed bg-white/80 p-4 rounded-lg shadow-sm">
            Explore a variety of mouthwatering cuisines from around the world. Whether you're in the mood for a quick snack or a full-course meal, discover the best restaurants offering diverse dishes. Create unforgettable memories with loved ones while enjoying exceptional dining experiences in your area.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <img
              src="https://cdn.dribbble.com/users/6985884/screenshots/16045804/media/6d2b84328c7c6ea9f3aa18bd2ade1736.gif"
              className="rounded-s-full w-full max-w-[550px] h-auto object-cover shadow-xl border-4 border-white transform rotate-1"
              alt="Food variety"
            />
            <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-full shadow-lg font-bold">
              Try Something New!
            </div>
          </div>
        </div>
      </div>

      {/* Cuisine Types - Enhanced card styling */}
      <div className="py-8 bg-gradient-to-b from-yellow-100 to-amber-50">
        <h2 className="text-center text-3xl font-bold p-4 text-green-800 underline decoration-wavy decoration-amber-500">
          Available Variety
        </h2>
        <div className="flex flex-wrap justify-center gap-6 px-4 py-6">
          {type.map((value, index) => (
            <RestaurantTypeCard
              key={index}
              image={value.image}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>

      {/* Category Filters - Enhanced button styling */}
      <div className="py-6 bg-gradient-to-t from-amber-100 to-yellow-50 shadow-inner">
        <h2 className="text-center text-3xl font-bold p-4 text-green-800">
          When You Are Hungry?
        </h2>
        <div className="flex flex-wrap justify-center gap-4 px-4 py-2">
          <button
            className={`${category === 1 ? "bg-green-800 shadow-lg scale-105" : "bg-green-600"} text-white font-semibold py-3 px-8 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105`}
            onClick={handleClickAll}
          >
            All
          </button>
          <button
            className={`${category === 2 ? "bg-green-800 shadow-lg scale-105" : "bg-green-600"} text-white font-semibold py-3 px-8 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105`}
            onClick={handleClickRestaurants}
          >
            Restaurants
          </button>
          <button
            className={`${category === 3 ? "bg-green-800 shadow-lg scale-105" : "bg-green-600"} text-white font-semibold py-3 px-8 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105`}
            onClick={handleClickTiffin}
          >
            Tiffin
          </button>
          <button
            className={`${category === 4 ? "bg-green-800 shadow-lg scale-105" : "bg-green-600"} text-white font-semibold py-3 px-8 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105`}
            onClick={handleClickMisc}
          >
            Miscellaneous
          </button>
        </div>
      </div>

      {/* Restaurant List - Enhanced background */}
      <div className="flex flex-wrap justify-center gap-6 p-6 bg-gradient-to-b from-amber-50 to-yellow-100">
        {value.map((e, index) => (
          <RestaurantsCard
            key={index}
            image={e.image}
            title={e.title}
            description={e.description}
            phonenumber={e.phonenumber}
            address={e.location}
            homedelivery={e.homedelivery}
          />
        ))}
      </div>

      {/* Register Section - Enhanced styling */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-800 px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 mt-8 shadow-lg">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-200">
            Want to register your restaurant?
          </h2>
          <p className="text-green-100 mt-2">
            Grow your business by reaching out to thousands of food lovers!
          </p>
        </div>
        <a
          href="/register-restaurant"
          className="mt-4 md:mt-0 bg-amber-400 hover:bg-amber-500 text-green-900 font-bold px-8 py-3 rounded-xl transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default RestaurantService;