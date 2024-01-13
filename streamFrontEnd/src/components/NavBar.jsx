import {Link} from "react-router-dom";

function NavBar() {
    const isLoggedIn = false;
    return (
        <div className={"bg-sec text-primary_text text-xl"}>
            <ul className={"max-w-screen-xl flex items-center justify-between mx-auto p-4"}>
                <li className={"w-1/2"}>
                    <Link to="/">Home</Link>
                </li>
                <div className={"flex items-center justify-around mx-auto p-4 w-1/2"}>
                    <li>
                        <Link to={"/Movies"}>Movies</Link>

                    </li>
                    <li>
                        <Link to={"/Profile"}>Profile</Link>
                       
                    </li>
                    <li>
                        {isLoggedIn ?
                            <li> Logout </li>
                            : <div className={" justify-around flex"}>
                                <Link className={"mx-4"} to={"/Login"}>Login</Link>
                                <Link to={"/Register"}>Register</Link>
                            </div>
                        }
                    </li>
                </div>
            </ul>
        </div>
    )
}
export default NavBar