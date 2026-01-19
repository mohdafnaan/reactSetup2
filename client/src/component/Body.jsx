import RestaurantCard from "./Rescard";

const Body = () => {
  return (
    <>
      <div className="p-2">
        <div className="p-2.5">Search</div>
        <div className="flex flex-wrap gap-4 justify-around">
          <RestaurantCard  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbdIZXEzq_oSQnNVmmN4sNPAPyJFIcTxUnA&s" resName = "Paradise Hotel" cuisine="Asian, Biryani, Hydrabadi" stars="4.5" time = "38 Mins" />
          <RestaurantCard img="food-logo-2.jpg"  resName = "Prince Hotel" cuisine="Indian, Tahari, Deccan" stars="5.0" time = "21 Mins"/>
          <RestaurantCard img="" />
          <RestaurantCard />
        </div>
      </div>
    </>
  );
};

export default Body;
