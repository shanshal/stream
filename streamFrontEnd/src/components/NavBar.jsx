import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { authActions } from "../store/auth-slice";
import { profileActions } from "../store/profile-slice";

function NavBar(probs) {
    const isLoggedIn = useSelector((state)=>state.auth.loggedIn);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const logoutHandler=()=>{
        dispatch(authActions.logOut());
        dispatch(profileActions.logOut());
        navigate("/");
    }
    console.log(probs.isLoading);
    return (

        <div className="navbar bg-base-100 my-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h7"/>
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={"/StreamPage"}>Stream</Link></li>
                        <li><Link to={"/Profile"}>Profile</Link></li>
                        <li><Link to="/Movies">Movies</Link></li>
                    </ul>

                </div>
            </div>
            <div className="navbar-center">
                <Link to={"/"} className="btn btn-ghost text-xl lg:text-3xl md:text-2xl">Streamy</Link>
            </div>
            <div className="navbar-end">
                {!probs.isLoading ?isLoggedIn ?
                    <div className={"justify-evenly items-center flex w-1/2"}>
                        <button className="btn  btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md text-md md:text-lg lg:text-xl" onClick={logoutHandler}>Log Out</button>
                        <button className="btn  btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-md text-md md:text-lg lg:text-xl">Upload</button>
                    </div>
                    : <div className={" justify-evenly flex w-1/2"}>

                        <Link
                            className={"btn  btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md text-md md:text-lg lg:text-xl"}
                            to={"/Login"}>Login</Link>

                        <Link
                            className={"btn  btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-md text-md md:text-lg lg:text-xl"}
                            to={"/Register"}>Register</Link>

                    </div>:""
                }
            </div>
        </div>
    )
}

export default NavBar