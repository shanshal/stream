import {useEffect, useReducer, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import classes from "./Register.module.css";

import { authActions, onLogin } from "../../store/auth-slice";
import Loader from "../loader/Loader";


import {useAuth} from "../../provider/authProvider.jsx";

const intilistate = {
    emailaddress: "",
    emailaddresstouched: false,
    password: "",
    passwordtouched: false,
    name: "",
    nametouched: false,
    cPassword: "",
    cPasswordtouched:false,
};

function reducer(state, action) {
    let newstate = {};

    switch (action.type) {
        case "touch":
            newstate = {...state, [action.value]: true};
            break;
        case "input":
            newstate = {...state, [action.input]: action.value};
            break;
        default:
    }
    return newstate;
}

const Register = () => {
    const {setToken} = useAuth()
    const [loginstate, setloginstate] = useState(false);
    const [useer, setuseer] = useState("");
    const isLoggedIn=useSelector((state)=>state.auth.loggedIn);
    const [initLoading,setInitLoading]=useState(true);
    const [state, dispatch] = useReducer(reducer, intilistate);
    const dispatchRedux = useDispatch();
    const navigate = useNavigate();
    const inputsValid = {
        emailaddress: state.emailaddress.length > 0,
        password: state.password.length > 8,
        name: state.name.length > 0,
        cPassword:state.cPassword === state.password
    };
    const [loading, setLoading] = useState(false);
    const [error,setError]=useState({
      showError:false,errorMessage:""
    });
    function onChangeInput(e) {
        const action = {
            type: "input",
            input: e.target.name,
            value: e.target.value,
        };
        dispatch(action);
    }

    const blurHandler = (e) => {
        const action = {
            type: "touch",
            value: e.target.name + "touched",
        };
        dispatch(action);
    };
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

    const onSubmit = async (e) => { //emailAdress => state.emailaddress , password => state.password
        e.preventDefault();
        setLoading(true);
        try {
            let response = await fetch("http://192.168.125.225:8000/api/account/signup",
                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            contact_name: state.name,
                            email: state.emailaddress,
                            password1: state.password,

                            password2: state.password,
                        })
                });
            let data = await response.json();
            setToken(data.token.access)


        } catch (e) {
          console.log(e);
            setError({showError: true, errorMessage: e.TypeError});
            setLoading(false);
        }
    }


    return (
        <div className={classes.container}>
            <form action="" className=" form">
                <h3>Register</h3>
                <label className="text">
                    Name<span className={classes.star}>*</span>
                </label>
                <input
                    type="text"
                    placeholder=""
                    className="text"
                    name="name"
                    onChange={onChangeInput}
                    onBlur={blurHandler}
                    value={state.name}
                />
                {!inputsValid.name && state.nametouched && (
                    <p className={classes.errorText}>Name must not be empty!</p>
                )}
                <label className="text">
                    Email<span className={classes.star}>*</span>
                </label>
                <input
                    type="text"
                    placeholder=""
                    className="text"
                    name="emailaddress"
                    onChange={onChangeInput}
                    onBlur={blurHandler}
                    value={state.emailaddress}
                />
                {!inputsValid.emailaddress && state.emailaddresstouched && (
                    <p className={classes.errorText}>Must not be empty!</p>
                )}
                <label className="text">
                    Password<span className={classes.star}>*</span>
                </label>
                <input
                    type="password"
                    placeholder="more than 8 characters"
                    className="text"
                    name="password"
                    onChange={onChangeInput}
                    onBlur={blurHandler}
                    value={state.password}
                />

                {!inputsValid.password && state.passwordtouched && (
                    <p className={classes.errorText}>Password must be longer than 8 characters!</p>
                )}
                  <label className="text">
                   Confirm Password<span className={classes.star}>*</span>
                </label>
                <input
                    type="password"
                    placeholder="more than 8 characters"
                    className="text"
                    name="cPassword"
                    onChange={onChangeInput}
                    onBlur={blurHandler}
                    value={state.cPassword}
                />

                {!inputsValid.cPassword && state.cPasswordtouched && (
                    <p className={classes.errorText}>Entered password is not correct!</p>
                )}
                <div className={classes.button}>
                    {" "}
                    <p className={classes.errorText}>{error.errorMessage}</p>
                    {error.showError && <p className={classes.errorText}>{error.errorMessage}</p> }
                    <button onClick={onSubmit} disabled={!inputsValid.emailaddress || !inputsValid.password || loading || !inputsValid.cPassword} >{loading ? "Loading...":"Confirm"}
                    </button>
                </div>
            </form>
            <div className={classes.bttmtext}>
                already have an Account? <Link to="/Login" className="text-sky-500">Login</Link>
            </div>
        </div>
    );
}
export default Register;