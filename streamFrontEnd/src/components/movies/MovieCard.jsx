import { useNavigate } from "react-router-dom";
import imgNotFound from "../../images/fileNotFound.jpg";
const MovieCard=(props)=>{
    const {name,id,picture}=props;
    const navigate=useNavigate();
    const buttonClickHandler=()=>{
        navigate(`/WatchMovie?movie=${id}`);
    }
    return(
        <li >
            <div>
                <img src={picture.length > 0 ? picture:imgNotFound} alt=""/>
            <button onClick={buttonClickHandler}>
            watch
            </button>
            <div ></div>
            </div>
            <div>
            <p>{name}</p>
            </div>
        </li>
    )
}
export default MovieCard;