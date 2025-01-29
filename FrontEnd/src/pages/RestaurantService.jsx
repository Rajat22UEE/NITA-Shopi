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
    <div className="w-screen m-0 p-0 bg-gradient-to-b from-yellow-200 to-yellow-00">
      <div className="flex flex-row w-full h-full">
       
        <div className="w-full flex flex-col gap-11 mt-[100px] justify-start px-2">
          <div
            className="text-4xl font-extrabold overflow-visible text-green-800"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            Discover diverse cuisines and create memories with loved ones.
          </div>
          <div className="text-xl font-extralight text-slate-600">
            Explore a variety of mouthwatering cuisines from around the world.
            Whether you're in the mood for a quick snack or a full-course meal,
            discover the best restaurants offering diverse dishes. Create
            unforgettable memories with loved ones while enjoying exceptional
            dining experiences in your area.
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-end w-full">
          <img
            src="https://cdn.dribbble.com/users/6985884/screenshots/16045804/media/6d2b84328c7c6ea9f3aa18bd2ade1736.gif"
            className="rounded-s-full max-w-full h-[575px]"
            alt=""
          />
        </div>
      </div>
      <br />
      <h2 className="text-center text-3xl font-bold p-4 underline">
        Available Variety
      </h2>
      <div className="flex flex-row justify-around">
        {type.map((value, index) => (
          <RestaurantTypeCard
            key={index} // Add a unique key
            image={value.image}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
      <h2 className="text-center text-3xl font-bold p-4 ">
        When You Are Hungry?
      </h2>

      <div className="flex flex-row justify-center gap-4">
        <button
         className={`${category==1?"bg-green-800":"bg-green-500"} text-white font-semibold py-2 px-6 rounded-xl hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg`}
          onClick={handleClickAll}
        >
          All
        </button>
        <button
           className={`${category==2?"bg-green-800":"bg-green-500"} text-white font-semibold py-2 px-6 rounded-xl hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg`}
          onClick={handleClickRestaurants}
        >
          Restaurants
        </button>
        <button
          className={`${category==3?"bg-green-800":"bg-green-500"} text-white font-semibold py-2 px-6 rounded-xl hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg`}
          onClick={handleClickTiffin}
        >
          Tiffin
        </button>
        <button
          className={`${category===4?"bg-green-800":"bg-green-500"} text-white font-semibold py-2 px-6 rounded-xl hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg`}
          onClick={handleClickMisc}
        >
          Miscellaneous
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
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
    </div>
  );
};

export default RestaurantService;