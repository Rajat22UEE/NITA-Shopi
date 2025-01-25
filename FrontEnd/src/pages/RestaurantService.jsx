import React from "react";
import RestaurantTypeCard from "../Components/RestaurantTypeCard";

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
        "https://static.vecteezy.com/system/resources/previews/036/627/131/original/ai-generated-realistic-chole-bhature-on-transparent-background-png.png", // Add a relevant image here
    },
    {
      title: "Tripura Dishes",
      description:
        "Experience the unique flavors of Tripura, with dishes like Mui Borok and Bamboo Shoot Curry.",
      image:
        "https://th.bing.com/th/id/OIP.ztZpfgJrC1KzKzEY5-UFLAHaFi?rs=1&pid=ImgDetMain", // Add an image for Tripura dishes
    },
    {
      title: "Bengali Foods",
      description:
        "Indulge in traditional Bengali flavors with dishes like Fish Curry and Rosogolla.",
      image:
        "https://th.bing.com/th/id/OIP.0L8Oo-I3bkW6JFqauHHR4AHaGa?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className="w-screen m-0 p-0 bg-gradient-to-b from-yellow-200 to-yellow-00">
      <div className="flex flex-row w-full h-full">
        {/* Content */}
        <div className="w-full flex flex-col gap-11 mt-[100px] justify-start px-2">
          <div
            className="text-4xl font-extrabold overflow-visible text-green-800"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            Discover diverse cuisines and create memories with loved ones.
          </div>
          <div className="text-xl  font-extralight text-slate-600">
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
            image={value.image}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
      <h2 className="text-center text-3xl font-bold p-4 underline">
        Restaurants
      </h2>

      {/* //Khakchawng */}

      <div className="h-[350px] border-2 border-black mx-5 flex flex-row justify-between p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
        {/* Image Section */}
        <div className="flex justify-center items-center mx-5 rounded-xl overflow-hidden">
          <img
            src="https://th.bing.com/th/id/OIP.Mt8p1g9AkRUyK8RMqNhCsAHaEJ?rs=1&pid=ImgDetMain"
            className="rounded-xl object-cover w-[200px] h-[200px]"
            alt="Khakchawng Restaurant"
          />
        </div>

        {/* Restaurant Information */}
        <div className="flex flex-col justify-center mx-5 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Khakchawng Restaurant
          </h2>
          <h3 className="text-sm text-gray-600 leading-relaxed">
            Khakchawng Restaurant offers a variety of delicious dishes with a
            cozy atmosphere. Experience amazing food and exceptional service at
            affordable prices.
          </h3>
        </div>

        {/* Contact & Button Section */}
        <div className="flex flex-col justify-center items-center mx-5 space-y-4">
          <div>
            <h1 className="font-semibold text-xl text-gray-800">
              Contact Details
            </h1>
            <h2 className="text-lg text-green-700">
              Phone Number: <span className="text-gray-600">999999909</span>
            </h2>
          </div>
          <button className="bg-green-800 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors">
            Home Delivery Available
          </button>
        </div>

        {/* Download Menu */}
        <div className="flex justify-end items-center text-sm text-blue-500 hover:underline cursor-pointer">
          Download Menu
        </div>
      </div>


      {/* Mj restaurent */}

      
    </div>
  );
};

export default RestaurantService;
