import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const Restaurantmenu =()=>{
   
    const {resId} = useParams();
    const  restInfo = useRestaurantMenu(resId); 
    const [showIndex,setShowIndex] = useState(0);

    if(restInfo ===null) return <Shimmer/>;
     //console.log(restInfo);
    const {name,cuisines } = restInfo?.cards[0]?.card?.card?.info;    
    const itemCards =restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards;
    const categories = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   // console.log(categories);
    return (
        <div className="text-center">
        <h1 className="font-bold mt-6 text-2xl">{ name }</h1>
        <p >{cuisines.join(",")}</p>
          {
            categories.map((category,index)=>(<RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItem={index === showIndex ? true:false} setShowIndex={()=>setShowIndex(index)} />
          
          ))}
        </div>
    )
}

export default Restaurantmenu;