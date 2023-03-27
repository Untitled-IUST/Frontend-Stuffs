import React , {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import"../css/Login.css"

function Login(){
  const validEmailAddress = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  const [emailAddress , setEmailAddress] = useState(null);
  const [emailAddressError , setEmailAddressError] = useState(true);
  const [password , setpassword] = useState(null);
  
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


  }
  return(
    <div className="LoginPage">
    <div className="auth-form-container">
        <h2>Login</h2>
            <form className="login-form">
                <label className="label">email:</label>
                <input type="email" placeholder="Enter your email" />
    
                <label className="label">password</label>
                <input type="password" placeholder="Enter your password"/>

              <button type="submit" className="submitButton" onClick={handleLogin}>
                Login
              </button>
        </form>
        <div>
          <Link to="/SignUp">
            <p1>dont have an account?SignUp</p1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login;