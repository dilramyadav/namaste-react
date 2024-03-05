import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItem,setShowIndex})=>{
   //console.log(data);
   
   const handleClick=()=>{
    setShowIndex()
   }

    return(
        <div className="w-[50%] mx-auto my-4  bg-gray-50 p-4 shadow-lg ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-medium">{data.title} ({data.itemCards.length})</span> 
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24"   stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round"  strokeLinejoin="round"  d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
        </span>
        </div>          
          { showItem && <ItemList items={data.itemCards}/> }     
        </div>
    )
}

export default RestaurantCategory;