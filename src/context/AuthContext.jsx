import React, { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth,setIsAuth] = useState(false);
  const navigate = useNavigate()
  const {state} = useLocation()

  const login = ()=>{
    setIsAuth(true);
    // if(state.from){
    //   navigate(state.from,{replace:true})
    // }
    // else{
    //   navigate("/login")
    // }
    navigate("/products")
    
  }
  const logout = ()=>{
    setIsAuth(false)
    navigate("/login")
  }
  return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>;
};
