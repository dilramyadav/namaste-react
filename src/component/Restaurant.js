import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const Restaurant =(props)=>{
    const {resData} = props;
   // console.log(resData.info);
   const {loggedInUser} = useContext(UserContext);
    return(
        <div className="m-3 p-1 pb-2 w-[250px]  bg-gray-100 rounded-lg  hover:bg-gray-300">
            <img className='rounded-lg'  alt='rest-logo'
            src={CDN_URL+resData.info.cloudinaryImageId} />
          <div className="truncate font-medium">{resData.info.name}</div>
          <div className="font-medium"><span className="fa fa-star checked text-green-600"></span>{resData.info.avgRating}-{resData.info.sla.slaString}</div>
          <div className="truncate">{resData.info.cuisines.join(",")}</div> 
          <div className="">{resData.info.locality}</div> 
          <div> {loggedInUser}</div>        
                    
        </div>
    );
}

export default Restaurant;