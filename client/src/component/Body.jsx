import { useState } from "react";
import RestaurantCard from "./Rescard";
import restaurants from "./data";

const Body = () => {
  const [reslist, setList] = useState(restaurants);

  function bestOnes(nums) {
    let filter = restaurants
      .filter((res) => res.avgRating > nums)
      .sort((a, b) => b.avgRating - a.avgRating);
    setList(filter);
  }

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-yellow-50 via-pink-50 to-purple-100 p-4">
        <div className="flex flex-wrap gap-3 justify-center items-center bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-3xl mx-auto border border-pink-200 sticky top-20 z-40">
          <input
            className="border border-pink-300 rounded-full px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-500"
            placeholder="search food or restaurant"
            type="text"
          />
          <button
            className="border border-purple-400 px-5 py-2 rounded-full text-purple-600 hover:bg-purple-100 transition"
            type="submit"
          >
            Search
          </button>
          <button
            className="px-6 py-2 rounded-full bg-linear-to-r from-orange-400 to-red-500 text-white shadow-lg hover:scale-105 hover:shadow-xl transition"
            onClick={() => {
              bestOnes(4);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 justify-center">
          {reslist.map((hotels, index) => (
            <RestaurantCard key={index} resData={hotels} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
