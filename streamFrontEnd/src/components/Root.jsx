import { Outlet } from "react-router-dom";
import Navbar from "./NavBar.jsx";
import Footer from "./Footer.jsx"
import classes from "./Root.module.css"
// import ErrorBox from "./UI/ErrorBox/ErrorBox.js";
import { useDispatch, useSelector } from "react-redux";
import { errorActions } from "../store/error-slice.js";
import {useEffect} from "react";
import {useAuth} from "../provider/authProvider.jsx";
import axios from "axios";
const Root=()=>{
    const {token} = useAuth()
    console.log(token)
    const dispatch=useDispatch();
    const showError=useSelector(state=>state.error.showError);
    const divClickHandler=()=>{
        dispatch(errorActions.hideError());
    }
    try{
        axios.get('http://192.168.125.225:8000/api/account/check', {
            'headers': {
                'Authorization': `Bearer ${token}`
            }
        })

    }
    catch(error){
        console.log(error)

    }
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