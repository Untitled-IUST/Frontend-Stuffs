import React , {useState} from "react";
import { Link, Navigate , useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Login.css";
//import { idCheck } from './contextAll';
//import { useContext , createContext } from 'react';

function LoginCustomer(){
  const validEmailAddress = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  const [emailAddress , setEmailAddress] = useState("");
  const [emailAddressError , setEmailAddressError] = useState("");
  const [passwordError , setPasswordError] = useState("");
  const [Error , setError] = useState("");
  const [password , setpassword] = useState("");
  const navigate = useNavigate();
  //const {id,setID} = useContext (idCheck);
  
  const handleLogin = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: 'https://amirmohammadkomijani.pythonanywhere.com/auth/jwt/create',
      headers: {
          'Content-Type': 'application/json',
      },
      data: {
          email: emailAddress,
          password: password,
      }
  })
  .then((res) => {
    console.log(res.data)
    localStorage.setItem('acctoken',res.data.access)
    console.log('.') 
    alert('You are logged in'); 
    navigate('/ProfilePage');
  })
  .catch(error => {
    setError(error.response.data["non_field_errors"]);
    setEmailAddressError(error.response.data["email"]);
    setPasswordError(error.response.data["password"]);
  }) 


  }
  return(
    <div className="LoginPage">
    <div className="auth-form-container">
        <h2>Login</h2>
            <form className="login-form">
                <label className="label">email:</label>
                <input type="email" placeholder="Enter your email" onChange={(e) => setEmailAddress(e.target.value)}/>
                <p>{emailAddressError}</p>
                <label className="label">password</label>
                <input type="password" placeholder="Enter your password" onChange={(e) => setpassword(e.target.value)}/>
                <label3>{passwordError}</label3>
                <p>{Error}</p>
              <button type="submit" className="submitButton" onClick={handleLogin}>
                Login
              </button>
          <Link to="/SignUpCustomer">
            <p1>dont have an account?SignUp</p1>
          </Link>
          <Link to="/">
            <p1>Im not a customer!</p1>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginCustomer;