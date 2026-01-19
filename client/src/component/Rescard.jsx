const RestaurantCard = (props) =>{
    let {resData} = props;
    let image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${resData.cloudinaryImageId}`
    return(
        <div className="w-60 min-h-75 hover:border cursor-pointer bg-[#f0f0f0] m-[5px] p-[5px]">
            <img className = "p-1.25 w-[100%] object-contain" src={image} alt="" />
            <h3 className="text-xl font-bold text-center">{resData.name}</h3>
            <h4 className="font-semibold ml-2 text-center">{resData.areaName}</h4>
            <h4 className="font-semibold  text-center" >{resData.avgRating}</h4>
            <h4 className="font-semibold  text-center">{resData.totalRatingsStrings}</h4>
        </div>
    )
}

export default RestaurantCard;