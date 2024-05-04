import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { isAuth } from "./authSlice";

const Auth = () => {
  const isAuthenticated = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const checkToeknExpiration =async () => {
    try {
      if (isAuthenticated.token) {
        const response =await axios.post("http://localhost:3000/api/auth", {
          token: isAuthenticated.token,
        });
        console.log(response);
        if (response.data.success === true) {
            dispatch(isAuth(true))
        }else{
            dispatch(isAuth(false))
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(isAuthenticated);

  return checkToeknExpiration;
};

export default Auth;
