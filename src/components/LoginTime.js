import { useState, useEffect } from "react";
import {jwtDecode} from 'jwt-decode';
import { useSelector } from "react-redux";

const LoginTime = () => {
    const userData = useSelector((state)=>state.auth.user)
    const [token, setToken] = useState();

    console.log(userData);
    // check if token is expired
    // if expired remove token from local storage
    // check if token is expired every 5 minutes

    useEffect(() => {
        const checkToeknExpiration = () => {
            if(token){
                const decodedTime = jwtDecode(token);
                const currTime = Date.now()/1000;
                if(decodedTime.exp < currTime){
                    localStorage.removeItem('token');
                    setToken(null);
                }
            }
        }
        const interval = setInterval(() => {
            checkToeknExpiration();
        }, 5 * 60 * 1000);

        return () => clearInterval(interval);
    },[token]);
    
    return null;
}

export default LoginTime;