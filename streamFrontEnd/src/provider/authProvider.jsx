import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // State to hold the authentication token
    const [token, setToken_] = useState(localStorage.getItem("token"));
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // Function to set the authentication token
    const setToken = (newToken) => {
        setToken_(newToken);
    };

    useEffect(() => {
        if (token) {
            setIsLoggedIn(true)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
            localStorage.setItem('token',token);
            console.log("token set, Redirecting to Home")

        } else {
            setIsLoggedIn(true)
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token')
            console.log("token removed, Redirecting to Login")

        }
    }, [token]);

    // Memoized value of the authentication context
    const contextValue = useMemo(
        () => ({
            token,
            setToken,
        }),
        [token]
    );

    // Provide the authentication context to the children components
    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;