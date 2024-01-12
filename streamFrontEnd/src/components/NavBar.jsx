import {Link} from "react-router-dom";

function NavBar() {
    const isLoggedIn = false;
    return (
        <div className={"bg-sec text-primary_text text-xl"}>
            <ul className={"max-w-screen-xl flex items-center justify-between mx-auto p-4"}>
                <li className={"w-1/2"}>
                    {/*<Link to="#">Home</Link>*/}
                    <a className={""} href={"#"}>Home</a>
                </li>
                <div className={"flex items-center justify-around mx-auto p-4 w-1/2"}>
                    <li>
                        {/*<Link to={"#"}>Movies</Link>*/}
                        <a href={"#"}>Movies</a>

                    </li>
                    <li>
                        {/*<Link to={"#"}>Profile</Link>*/}
                        <a href={"#"}>Profile</a>
                    </li>
                    {/*<li>*/}
                    {/*    {isLoggedIn ?*/}
                    {/*        <Link to={"#"}>Logout</Link>*/}
                    {/*        : <div>*/}
                    {/*            <Link to={"#"}>Login</Link>*/}
                    {/*            <Link to={"#"}>Register</Link>*/}
                    {/*        </div>*/}
                    {/*    }*/}
                    {/*</li>*/}
                </div>
            </ul>
        </div>
    )
}
export default NavBar