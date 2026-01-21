const RestaurantCard = (props) => {
  let { resData } = props;
  let image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${resData.cloudinaryImageId}`;
  
  return (
    <div className="w-64 min-h-80 cursor-pointer bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-3 border border-pink-200">
      <img
        className="w-full h-40 object-cover rounded-xl mb-3 ring-2 ring-orange-300"
        src={image}
        alt=""
      />

      <h3 className="text-lg font-bold text-purple-700 text-center truncate">
        {resData.name}
      </h3>

      <h4 className="text-sm text-pink-500 text-center mt-1 font-medium">
        {resData.areaName}
      </h4>

      <div className="flex items-center justify-center text-yellow-500 text-sm mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>
            {i < Math.floor(resData.avgRating) ? "★" : "☆"}
          </span>
        ))}
        <span className="ml-1 text-gray-700">
          ({resData.avgRating})
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
