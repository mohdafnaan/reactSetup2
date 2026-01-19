
const RestaurantCard = (props) =>{

    return(
        <div className="w-60 h-75 hover:border cursor-pointer bg-[#f0f0f0] m-[5px] p-[5px]">
            <img className = "p-1.25 w-[100%]" src={props.img} alt="" />
            <h3 className="text-xl font-bold text-center">{props.resName}</h3>
            <h4 className="font-semibold ml-2 text-center">{props.cuisine}</h4>
            <h4 className="font-semibold  text-center" >{props.stars}</h4>
            <h4 className="font-semibold  text-center">{props.time}</h4>
        </div>
    )
}

export default RestaurantCard