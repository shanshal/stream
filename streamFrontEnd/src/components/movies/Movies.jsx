import { useEffect,useState } from "react";
import MovieCard from "./MovieCard";
import classes from "./Movies.module.css";
import search from "../../images/search.png"
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
    },
    {
        name:"Archive",
        id:"05",
        describtion:"",
        picture:""
    },
    {
        name:"Archive",
        id:"06",
        describtion:"",
        picture:""
    },
    
]
const Movies=()=>{
    const [initmovies,setInitMovies]=useState([]);
    const [movies,setMovies]=useState([]);
    const [loading,setLoading]=useState(true);
    const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearchValue(searchValue), 1000);
    return () => clearTimeout(timer);
  }, [searchValue]);

  useEffect(() => {
    performSearch(debouncedSearchValue);
  }, [debouncedSearchValue]);
  const performSearch = (value) => {
    if (value) {
      console.log("enter");
      if (value.trim() !== "") {
        setMovies(
          initmovies.filter((movie) =>
            movie.name.toLowerCase().match(value.toLowerCase())
          )
        );
      } else {
        setMovies(initmovies);
    }
    } else {
      setMovies(initmovies);
    }
  };

    useEffect(()=>{
        const fetchMovies=async()=>{
        try{
            setMovies(locmovies);
            setLoading(false);
            setInitMovies(locmovies)
        }
        catch(e){

        }
    }
    fetchMovies();
    },[])

    const searchChangeHandler = (e) => {
        setSearchValue(e.target.value);
      };
if(loading){
  return (<></>);
}
return(
<>
<section className={classes.firstCont}>

        <div className={classes.searchBar}>
          {" "}
          <div>
            <img src={search} />
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={searchChangeHandler}
            placeholder="search movie..."
          ></input>{" "}
        </div>
        
    <ul className={classes.moviesList}>
       
    {   
        movies.map((movie)=>{
        return <MovieCard name={movie.name} id={movie.id} picture={movie.picture} key={movie.id}/>
        }
        ) 
    }
    </ul>
</section>
</>
);  
}
export default Movies;