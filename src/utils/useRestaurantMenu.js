import {useState,useEffect } from "react";
import { MENU_URL} from "./constant";

const useRestaurantMenu =(resId)=>{
    const [restInfo,setrestInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])
   
     const fetchMenu = async ()=>{
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        setrestInfo(json.data);              
     }
     return restInfo;
}
export default useRestaurantMenu;
