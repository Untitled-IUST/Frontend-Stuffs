import React , {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import"../css/Login.css"

function Login(){
  const validEmailAddress = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  const [emailAddress , setEmailAddress] = useState("");
  const [Error , setError] = useState("");
  const [password , setpassword] = useState("");
  
  const handleLogin = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/auth/customer/login/",
      headers: {
          'Content-Type': 'application/json',
      },
      data: {
          email: emailAddress,
          password: password,
      }
  })
  .then((res) => {
    console.log('.') 
    alert('You are logged in'); 
  })
  .catch(error => {
    setError(error.response.data["non_field_errors"]);
  }) 


  }
  return(
    <div className="LoginPage">
    <div className="auth-form-container">
        <h2>Login</h2>
            <form className="login-form">
                <label className="label">email:</label>
                <input type="email" placeholder="Enter your email" onChange={(e) => setEmailAddress(e.target.value)}/>
    
                <label className="label">password</label>
                <input type="password" placeholder="Enter your password" onChange={(e) => setpassword(e.target.value)}/>
                <label3>{Error}</label3>

              <button type="submit" className="submitButton" onClick={handleLogin}>
                Login
              </button>
          <Link to="/SignUp">
            <p1>dont have an account?SignUp</p1>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login;