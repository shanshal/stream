import { useEffect, useState, useSyncExternalStore } from "react";
import imgNotFound from "../../images/fileNotFound.jpg";
import classes from "./Profile.module.css"
import { useLocation, useNavigate } from "react-router-dom";
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
const PreviewProfile=()=>{
    const [movies,setMovies]=useState([]);
    const [userInfo,setUserInfo]=useState(false);
    const [initLoading,setInitLoading]=useState(true);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [userId, setUserId] = useState((queryParams.get('user')) || '');
    const navigate=useNavigate();
    useEffect(()=>{
       
    },[])
    const movieClickHandler=()=>{
        navigate()
    }
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                setUserInfo({});
                setMovies(locmovies);
                setInitLoading(false);
            }
            catch(e){
    
            }
        }
      
        if(userId.length> 0){
          try{
            fetchData();
          }
          catch(e){

          }
        }
        
      },[]);
      const subscribeHandler=()=>{
            
      }
      if(initLoading){
        return <Loader/>
      }
    return(
        <>
        <div className={classes.mCont}>
            <section>
                <img  src={imgNotFound}/>
                <h3>{userInfo.name}</h3>
                <p>0 subscribers</p>
                <button onClick={subscribeHandler}>Subscribe</button>
            </section>
            <section>
            <ul>
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
export default PreviewProfile;