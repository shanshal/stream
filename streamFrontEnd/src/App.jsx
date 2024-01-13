
import { createBrowserRouter,RouterProvider, useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom';

import './App.css'
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Movies from './components/movies/Movies';
import Profile from './components/profile/Profile';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


function App() {
  const [routes,setRoutes]=useState([]);
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  useEffect(()=>{
  if(isLoggedIn){
  setRoutes( [
      {
        path:"/Movies",
        element:<Movies/>
      },{
        path:"/Profile",
        element:<Profile/>
      }
    ]
  )
  }
  else{
    setRoutes(
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/Register",
        element:<Register/>
      },
    )
  }
},[]);
  const router=createBrowserRouter([
    {
     path:"/",
     element:<Root/>,
     children:[
       {
         path:"/",
         element:<Home/>
       },
       {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/Register",
        element:<Register/>
      },
      {
        path:"/Movies",
        element:<Movies/>
      },{
        path:"/Profile",
        element:<Profile/>
      }
      ]}]);
  return (
    <>
  <RouterProvider router={router}>
  
  </RouterProvider>
    </>
  )
}

export default App
