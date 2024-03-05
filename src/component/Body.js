import Restaurant from "./Restaurant";
import { useState,useEffect } from "react";
import restList from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"


const Body =() =>{
    const [restData,setrestData] = useState([]);
    const [filterResData,setFilterResData] = useState([]);
    const [searchText,setSearchText] = useState("");    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
      const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const json = await data.json();
      //console.log(json.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setrestData(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      setFilterResData(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    }
    
   

    return restData.length===0 ? <Shimmer/>:(
        <div className="ml-24 mr-24">
            <div className="flex justify-between">
             <div className="search m-0 p-2 ml-2">
                <input type="text" className="border border-solid border-black rounded-md" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }} />
                <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={()=>{                   
                    const filterData = restData.filter((res)=>
                           res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())                        
                    );                    
                    setFilterResData(filterData);
                }} >Search</button>
             </div>
              <div className="search mr-16 m-0 p-2 flex items-center">
                    <button className="px-4 py-1 bg-gray-200 rounded-lg" onClick={()=>{
                    const filterList= restData.filter(
                        (res)=>res.info.avgRating >4
                    );
                    setFilterResData(filterList);
                    }}
                    >Top Rated Restaurant</button>
              </div>
            </div>
            <div className="flex flex-wrap">
               {
                filterResData.map(restaurant => <Link to={"/restaurant/"+restaurant.info.id}> <Restaurant key={restaurant.info.id} resData={restaurant}/></Link>)
               }
          </div>
        </div>
    );
}

export default Body;