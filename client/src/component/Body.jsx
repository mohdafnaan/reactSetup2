import { useState } from "react";
import RestaurantCard from "./Rescard";
import axios from "axios";
import { useEffect } from "react";

const Body = () => {
  const [reslist, setList] = useState([]);
  const [search, setSearch] = useState("Biryani");
  const [inSearch, setInsearch] = useState("");

  function bestOnes(nums) {
    let filter = reslist
      .filter((res) => res.avgRating > nums)
      .sort((a, b) => b.avgRating - a.avgRating);
    setList(filter);
  }

  async function restaurants() {
    try {
      let response = await axios.get(
        `https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.38430&lng=78.45830&str=${search}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%22Autosuggest%2FTop%2520200%2520queries%2FBiryani.png%22%2C%22dishFamilyId%22%3A%22846613%22%2C%22dishFamilyIds%22%3A%5B%22846613%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&selectedPLTab=RESTAURANT`,
      );

      const totalRes =
        response.data.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards;

      const finalRes = totalRes.map((x) => x.card.card.info);
      console.log(finalRes);
      setList(finalRes);
    } catch (error) {
      console.log(error);
    }
  }

  function inCardSearch() {
    try {
      console.log("hi in card");
      let filtered = reslist.filter((x) =>
        x.name.toLowerCase().includes(inSearch.toLowerCase()),
      );
      console.log(filtered);
      setList(filtered);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    restaurants();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-yellow-50 via-pink-50 to-purple-100 p-4">
        <div className="flex flex-wrap gap-3 justify-center items-center bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-3xl mx-auto border border-pink-200 sticky top-20 z-40">
          <input
            className="border border-pink-300 rounded-full px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-500"
            placeholder="search food or restaurant"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="border border-purple-400 px-5 py-2 rounded-full text-purple-600 hover:bg-purple-100 transition"
            type="submit"
            onClick={restaurants}
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

        <div className="flex mt-4 flex-wrap gap-3 justify-center items-center bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-3xl mx-auto border border-pink-200 sticky  top-40 z-30">
          <input
            className="border border-pink-300 rounded-full px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-500"
            placeholder="search In Card"
            type="text"
            onChange={(e) => {
              setInsearch(e.target.value);
            }}
          />
          <button
            className="border border-purple-400 px-5 py-2 rounded-full text-purple-600 hover:bg-purple-100 transition"
            type="submit"
            onClick={inCardSearch}
          >
            Search
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
