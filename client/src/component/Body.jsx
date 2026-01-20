import { useState } from "react";
import RestaurantCard from "./Rescard";
import restaurants from "./data";


const Body = () => {
  const [reslist,setList] = useState(restaurants)

  function bestOnes (nums) {
    let filter = restaurants.filter((res) => res.avgRating > nums)
    setList(filter)  
  }



  return (
    <>
      <div className="p-2">
        <div className="flex gap-24">
          <input
            className="border p-1"
            placeholder="search food or restaurant"
            type="text"
          />
          <button className="border p-1 rounded-xl" type="submit">
            Search
          </button>
          <button
            className="border p-1 rounded-xl bg-orange-500"
            onClick={() => {
            bestOnes(4)  
            }}
          >
            top rated restaurants
          </button>
        </div>
        <div className="flex flex-wrap gap-4 justify-around">
          {reslist.map((hotels, index) => (
            <RestaurantCard key={index} resData={hotels} />
          ))}
          
        </div>
      </div>
    </>
  );
};

export default Body;
