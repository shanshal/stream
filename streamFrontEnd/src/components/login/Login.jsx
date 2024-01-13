import {useEffect, useReducer, useState} from "react";
import {useDispatch} from 'react-redux';
import classes from "./Login.module.css";
import {useNavigate} from "react-router-dom";
import {errorActions} from "../../store/error-slice";
import {useAuth} from "../../provider/authProvider.jsx";



const intilistate = {
    emailaddress: "",
    emailaddresstouched: false,
    password: "",
    passwordtouched: false,
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

const Login = () => {
    const {setToken} = useAuth()
    const [error, setError] = useState({
        showError: false,
        errorMessage: ""
    });
    const [state, dispatch] = useReducer(reducer, intilistate);
    const inputsValid = {
        emailaddress: state.emailaddress.length > 0,
        password: state.password.length > 0,
    };
    const [loading, setLoading] = useState(false);

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


    const onSubmit = async (e) => { //emailAdress => state.emailaddress , password => state.password
        e.preventDefault();
        setLoading(true);

        try {
            let response = await fetch("http://192.168.125.225:8000/api/account/signin",
                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            email: state.emailaddress,
                            password: state.password
                        })
                });
            let data = await response.json();

            const token = data.token.access;
            console.log(data.token.access);
            setToken(token);

        } catch (e) {
            setError({showError: true, errorMessage: e.title});
        }


    }


    return (
        <div className={classes.container}>
            <form action="" className=" form">
                <h3>Login</h3>
                <label className="text bg-white">
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
                    <p className={classes.errorText}>Password must not be empty!</p>
                )}
                <div className={classes.button}>
                    {" "}
                    {error.showError && <p className={classes.errorText}>{error.errorMessage}</p>}
                    <button onClick={onSubmit}
                            disabled={!inputsValid.emailaddress || !inputsValid.password}>{loading ? "Loading" : "Confirm"}</button>
                </div>
            </form>
            <div className={classes.bttmtext}>
                <p>Only registered accounts can login.</p>
            </div>
        </div>
    );
}
export default Login;