import { useEffect, useState } from "react";
import imgNotFound from "../../images/fileNotFound.jpg";
import classes from "./Profile.module.css"
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

    useEffect(()=>{
        const fetchMovies=async()=>{
        try{
            setMovies(locmovies);
            setLoading(false);
        }
        catch(e){

        }
    }
    fetchMovies();
    },[])
    return(
        <div className={classes.mCont}>
            <section>
                <img  src={imgNotFound}/>
                <h3>name</h3>
                <p>0 subscribers</p>
                <button>Subscribe</button>
            </section>
            <section>
            <ul>
            {movies.map((movie)=>
            <li key={movie.key}>
                    <img src={movie.picture.length > 0 ? movie.picture:imgNotFound}></img>
                    <h4>{movie.name}</h4>
            </li>
            )}
            </ul>
            </section>
        </div>
    )
}
export default Profile;