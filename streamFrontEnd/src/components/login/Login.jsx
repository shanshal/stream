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
            let response = await fetch("http://172.20.10.5:8000/api/account/signin",
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
        <div className={"w-full"}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-primary ">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-primary">Email</span>
                                </label>
                                <input type="email"
                                       placeholder="email"
                                       className="input input-bordered"
                                       required
                                       name="emailaddress"
                                       onChange={onChangeInput}
                                       onBlur={blurHandler}
                                       value={state.emailaddress}/>
                                {!inputsValid.emailaddress && state.emailaddresstouched && (
                                    <p className={"text-secondary"}>Must not be empty!</p>
                                )}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-primary">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required name="password" onChange={onChangeInput}
                                       onBlur={blurHandler} value={state.password}/>
                                {!inputsValid.password && state.passwordtouched && (
                                    <p className={"text-secondary"}>Password must not be empty!</p>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary"
                                        onClick={onSubmit}
                                        disabled={!inputsValid.emailaddress || !inputsValid.password}>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;