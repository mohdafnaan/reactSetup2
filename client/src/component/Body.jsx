import RestaurantCard from "./Rescard";
import restaurants from "./data";

const Body = () => {
  const rests = restaurants;
  return (
    <>
      <div className="p-2">
        <form className="flex gap-2 justify-center" action="search">
            <input className="border p-1" placeholder="search food or restaurant" type="text"/>
            <button className="border p-1 rounded-xl" type="submit" >Search</button>
        </form>
        <div className="flex flex-wrap gap-4 justify-around">
            {
                rests.map((hotels,index)=>(
                    <RestaurantCard key={index} resData = {hotels}/>
                ))
            }
        </div>
      </div>
    </>
  );
};

export default Body;
