import { LOGO } from "../utils/constant";
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
const {loggedInUser} = useContext(UserContext);
    //console.log(data);
 const cartItems = useSelector((store)=> store.cart.items);
    return(
        <div className="bg-white shadow-lg sticky top-0">
        <div className="flex justify-between ml-10 mr-10">
            <div className='logo-container'>
                <img className="w-28" src={LOGO}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 font-bold">Cart ( {cartItems.length} items)</li>
                    <li className="px-4">Login</li>
                    <li className="px-4 font-medium">{loggedInUser}</li>
                </ul>
            </div>

        </div>
        </div>
    );
}

export default Header;