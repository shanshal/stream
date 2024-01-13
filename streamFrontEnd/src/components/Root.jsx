import { Outlet } from "react-router-dom";
import Navbar from "./NavBar.jsx";
import classes from "./Root.module.css"
// import ErrorBox from "./UI/ErrorBox/ErrorBox.js";
import { useDispatch, useSelector } from "react-redux";
import { errorActions } from "../store/error-slice.js";
import {useEffect, useState} from "react";
import axios from 'axios';
import Loader from "./loader/Loader.jsx";

const Root=()=>{
    const dispatch=useDispatch();
    const [isLoading,setisLoading]=useState(true);
    const showError=useSelector(state=>state.error.showError);
    const divClickHandler=()=>{
        dispatch(errorActions.hideError());
    }
    useEffect(()=>{
        const checkAuth= async()=>{
        const storedData=localStorage.getItem('IsLoggedIn');
        
          const token=localStorage.getItem('token');
          console.log(token);
          if (!token){
            console.log('NO TOKEN FOUND');
        }
        const config = {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        }
          try {
            
            const response = await axios.post("http://192.168.125.225:8000/api/account/check", config)
            console.log(response.data)
            
            setisLoading(false);
          }
          catch(e){
            setisLoading(false);
            console.log(e)
          }
        //   try{
        //     const result= await fetch("http://192.168.125.225:8000/api/account/check",
        //     {
        //         method: 'GET',
        //         headers: {
        //             'Authorization': `${storedProfile}`
        //         }
        //     });
        //     console.log(result);
        //   }
        //   catch(error){
        //         console.log(error);
        //   }
        }
         checkAuth();
    },[])
return(
    <>
    {showError &&<div className={classes.error}> <ErrorBox/>
    </div>
    }
    {showError &&<div className={classes.backDrop} onClick={divClickHandler}></div>
}
    <div className={classes.firstContainer}>
    <Navbar isLoading={isLoading}/>
    
   <main className={classes.main}> {!isLoading &&<Outlet/>} {isLoading && <Loader/>}</main> 
    </div>
    </>
)
}
export default Root;