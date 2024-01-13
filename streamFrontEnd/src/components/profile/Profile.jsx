import { useEffect, useState, useSyncExternalStore } from "react";
import imgNotFound from "../../images/fileNotFound.jpg";
import classes from "./Profile.module.css"
import { useNavigate } from "react-router-dom";
import UploadMovie from "./UploadMovie";
import { useSelector } from "react-redux";
import Loader from "../loader/Loader";
const locmovies=[
    {
        name:"star wars",
        id:"01",
        describtion:"",
        picture:""
    },
    {
        name:"Archive",
        id:"02",
        describtion:"",
        picture:""
    },
    {
        name:"Archive",
        id:"04",
        describtion:"",
        picture:""
    },]
const Profile=()=>{
    const [movies,setMovies]=useState([]);
    const [showUpload,setShowUpload]=useState(false);
    const isLoggedIn=useSelector((state)=>state.auth.loggedIn);
    const [initLoading,setInitLoading]=useState(true);
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchMovies=async()=>{
        try{
            setMovies(locmovies);
            setLoading(false);
        }
        catch(e){

        }
    }
    const subscribeHandler=()=>{

    }
    fetchMovies();
    },[])
    const movieClickHandler=()=>{
        navigate()
    }
    useEffect(()=>{
        if(isLoggedIn){
          console.log(isLoggedIn);
          navigate("/");
        }
        setInitLoading(false);
        console.log(isLoggedIn);
      },[])
      if(initLoading){
        return <Loader/>
      }
    return(
        <>
        { showUpload && <div className={classes.uploadPage}><UploadMovie setShowUpload={setShowUpload}/></div>}
        {showUpload && <div className={classes.backDrop} onClick={()=>setShowUpload(false)}/> }
        <div className={classes.mCont}>
            <section>
                <img  src={imgNotFound}/>
                <h3>name</h3>
                <p>0 subscribers</p>
            </section>
            <section>
            <ul>
                <li title="Upload Movie" onClick={()=>setShowUpload(true)}>+</li>
            {movies.map((movie)=>
            <li key={movie.key} onClick={movieClickHandler}>
                    <img src={movie.picture.length > 0 ? movie.picture:imgNotFound}></img>
                    <h4>{movie.name}</h4>
            </li>
            )}
            </ul>
            </section>
        </div></>
    )
}
export default Profile;