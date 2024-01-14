import {useReducer, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import classes from "./Register.module.css";
import {useAuth} from "../../provider/authProvider.jsx";
const intilistate = {
    emailaddress: "",
    emailaddresstouched: false,
    password: "",
    passwordtouched: false,
    name: "",
    nametouched: false
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
    const [state, dispatch] = useReducer(reducer, intilistate);
    const dispatchRedux = useDispatch();
    const navigate = useNavigate();
    const inputsValid = {
        emailaddress: state.emailaddress.length > 0,
        password: state.password.length > 8,
        name: state.name.length > 0
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
            setError({showError: true, errorMessage: e.title});
        }







       // fetch ("http://172.20.10.5:8000/api/account/signup",
       //     method: 'POST',
       //      body: JSON.stringify(
       //      {
       //          name: state.name,
       //          email: state.emailaddress,
       //          password: state.password
       //      })
       //     )

    }


    return (
        <div className={"w-full"}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-primary">Register</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-primary">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" required
                                       onChange={onChangeInput}
                                       onBlur={blurHandler}
                                       value={state.name}
                                       name={"name"}
                                />
                                {!inputsValid.name && state.nametouched && (
                                    <p className={"text-secondary"}>Name must not be empty!</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-primary">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" required
                                       onChange={onChangeInput}
                                       onBlur={blurHandler}
                                       value={state.emailaddress}
                                       name={"emailaddress"}
                                />
                                {!inputsValid.emailaddress && state.emailaddresstouched && (
                                    <p className={"text-secondary"}>Must not be empty!</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-primary">Password</span>
                                </label>
                                <input type="password"
                                       placeholder="More than 8 characters"
                                       className="input input-bordered"
                                       name="password"
                                       onChange={onChangeInput}
                                       onBlur={blurHandler}
                                       name={"password"}
                                       value={state.password}
                                       required/>
                            </div>
                            {!inputsValid.password && state.passwordtouched && (
                                <p className={"text-secondary"}>Please choose a valid password :)</p>
                            )}
                            <div className="form-control mt-6">

                                <button onClick={onSubmit} disabled={!inputsValid.emailaddress || !inputsValid.password}
                                        className="btn btn-primary">Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;