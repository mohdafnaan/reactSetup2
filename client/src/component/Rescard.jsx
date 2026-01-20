const RestaurantCard = (props) =>{
    let {resData} = props;
    let image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${resData.cloudinaryImageId}`
    return(
        <div className="w-60 min-h-60 hover:border-2 cursor-pointer bg-[#f0f0f0] m-1.25 p-1.35">
            <img className = "p-1.25 w-full h-30 object-contain" src={image} alt="" />
            <h3 className="text-xl font-bold text-center">{resData.name}</h3>
            <h4 className="font-semibold ml-2 text-center">{resData.areaName}</h4>
            <h4 className="font-semibold  text-center" >{resData.avgRating}</h4>
            <div className="flex items-center justify-center text-yellow-500 text-sm mb-1">
                {Array.from({length:5}).map((_,i)=>(
                    <span key={i}>{i < Math.floor(resData.avgRating) ? "★" : "☆"}</span>
                ))}
                <span className="ml-1 text-grey-700">({resData.avgRating})</span>
            </div>
        </div>
    )
}

export default RestaurantCard