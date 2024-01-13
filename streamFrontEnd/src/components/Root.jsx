import { Outlet } from "react-router-dom";
import Navbar from "./NavBar.jsx";
import Footer from "./Footer.jsx"
import classes from "./Root.module.css"
// import ErrorBox from "./UI/ErrorBox/ErrorBox.js";
import { useDispatch, useSelector } from "react-redux";
import { errorActions } from "../store/error-slice.js";
import {useEffect} from "react";
const Root=()=>{
    const dispatch=useDispatch();
    const showError=useSelector(state=>state.error.showError);
    const divClickHandler=()=>{
        dispatch(errorActions.hideError());
    }
    useEffect(()=>{
        const storedData=localStorage.getItem('IsLoggedIn');
        if(storedData==='1'){
          const storedProfile=localStorage.getItem('uid');
          try{

          }
          catch(error){

          }
        }      
    },[])
return(
    <>
    {showError &&<div className={classes.error}> <ErrorBox/>
    </div>
    }
    {showError &&<div className={classes.backDrop} onClick={divClickHandler}></div>
}
    <div className={classes.firstContainer}>
    <Navbar/>
    <main className={classes.main}><Outlet/></main>
        <Footer/>
    </div>
    </>
)
}
export default Root;