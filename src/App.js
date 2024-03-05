
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './component/Header';
import Body from './component/Body';
import About from './component/About';
import Contact from './component/Contact';
import Restaurantmenu from './component/Restaurantmenu';
import Error from './component/Error';
import {createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import UserContext from "./utils/UserContext";
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const AppLayout =()=>{

    const [userName,setUserName] = useState();
    useEffect(()=>{
      const data ={
        name:"Dilram Yadav",
      }
      setUserName(data.name);
    },[])
    return(
        <Provider store={appStore} >
        <UserContext.Provider value={{loggedInUser: userName}} >
        <div className='app'>
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    );
}
const root    = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter(
[
 { 
    path:'/',
    element: <AppLayout/>,
    children:[
        {
            path:'/',
            element:<Body/>,
             
         },
        {
            path:'/about',
            element:<About/>,
             
         },
         {
            path:'/contact',
            element:<Contact/>,
            
         },
         {
            path:'/restaurant/:resId',
            element:<Restaurantmenu/>,
            
         }
    ],
    errorElement: <Error/>,  
 },
 
]
)

root.render(<RouterProvider router={appRouter}/>);