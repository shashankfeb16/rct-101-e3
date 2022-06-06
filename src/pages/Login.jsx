import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [logincred,setLoginCred] = useState({});
  const {login} = useContext(AuthContext)

  const handleChange = (e)=> {
    const {name,value} = e.target;
    setLoginCred({
      ...logincred,
      [name]: value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    login();
    
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input data-cy="login-email" type="email" placeholder="Enter Email" name="email" onChange={handleChange} />
        <input data-cy="login-password" type="password" placeholder="Enter Password" name="password" />
        <button data-cy="login-submit" type="submit">Login</button>
      </form>

    </div>
  );
};

export default Login;
