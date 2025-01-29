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

      <div className="flex flex-row justify-center gap-4">
        <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-xl hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg">
          All
        </button>
        <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-xl hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg">
          Restaurants
        </button>
        <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-xl hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg">
          Tiffin
        </button>
        <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-xl hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg">
          Miscellaneous
        </button>
      </div>

      {/* //Khakchawng */}

      <div className="h-[400px] w-full max-w-4xl border-2 border-gray-200 mx-auto flex flex-row justify-between p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white my-11">
        {/* Image Section */}
        <div className="flex justify-center items-center w-1/3 rounded-xl overflow-hidden">
          <img
            src="https://th.bing.com/th/id/OIP.Mt8p1g9AkRUyK8RMqNhCsAHaEJ?rs=1&pid=ImgDetMain"
            className="rounded-xl object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            alt="Khakchawng Restaurant"
          />
        </div>

        {/* Restaurant Information */}
        <div className="flex flex-col justify-center w-1/3 px-6 text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Khakchawng Restaurant
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Khakchawng Restaurant offers a variety of delicious dishes with a
            cozy atmosphere. Experience amazing food and exceptional service at
            affordable prices.
          </p>
        </div>

        {/* Contact & Button Section */}
        <div className="flex flex-col justify-center items-center w-1/3 space-y-6">
          <div className="text-center">
            <h1 className="font-semibold text-xl text-gray-800 mb-2">
              Contact Details
            </h1>
            <h2 className="text-lg text-green-700">
              Location: <span className="text-gray-600">Shopping</span>
            </h2>
            <h2 className="text-lg text-green-700">
              Phone: <span className="text-gray-600">999999909</span>
            </h2>
          </div>
          <button className="bg-green-800 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            Home Delivery Available
          </button>
        </div>

        {/* Download Menu */}
        <div className="absolute bottom-6 right-6">
          <div className="flex items-center text-sm text-blue-500 hover:text-blue-600 cursor-pointer transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Download Menu
          </div>
        </div>
      </div>
      <br />
      {/* Mj restaurent */}
      <div className="h-[400px] w-full max-w-4xl border-2 border-gray-200 mx-auto flex flex-row justify-between p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
        {/* Image Section */}
        <div className="flex justify-center items-center w-1/3 rounded-xl overflow-hidden">
          <img
            src="https://th.bing.com/th/id/OIP.Mt8p1g9AkRUyK8RMqNhCsAHaEJ?rs=1&pid=ImgDetMain"
            className="rounded-xl object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            alt="Khakchawng Restaurant"
          />
        </div>

        {/* Restaurant Information */}
        <div className="flex flex-col justify-center w-1/3 px-6 text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            MJ Restaurant
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Mj restaurants special for our chicken items enjoy the birthday
            party of your loved one with the delicious chicken items from our
            Restaurant.
          </p>
        </div>

        {/* Contact & Button Section */}
        <div className="flex flex-col justify-center items-center w-1/3 space-y-6">
          <div className="text-center">
            <h1 className="font-semibold text-xl text-gray-800 mb-2">
              Contact Details
            </h1>
            <h2 className="text-lg text-green-700">
              Phone: <span className="text-gray-600">999999909</span>
            </h2>
          </div>
          <button className="bg-red-500 text-white py-3 px-8 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            Home Delivery Not Available
          </button>
        </div>

        {/* Download Menu */}
        <div className="absolute bottom-6 right-6">
          <div className="flex items-center text-sm text-blue-500 hover:text-blue-600 cursor-pointer transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Download Menu
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantService;
