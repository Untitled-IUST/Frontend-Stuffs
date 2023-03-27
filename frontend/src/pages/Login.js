import React , {useState} from "react";
import { Link } from "react-router-dom";
import"../css/Login.css"

function Login(){
  const validEmailAddress = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  const [emailAddress , setEmailAddress] = useState(null);
  const [emailAddressError , setEmailAddressError] = useState(true);
  const handleEmail = (event) => {
    //check if email is valid and exists
    if(validEmailAddress.test(event.taeget.value) === false){
      setEmailAddressError("Invalid Email!");
    }
    //check email exists if it does put email error to false (if it doesnt put error to doesnt exist) and set email address to value
  }
  const handlePassword = (event) => {
    //check if password is correct
  }
  const handleLogin = (event) => {

  }
  return(
    <div className="LoginPage">
    <div className="auth-form-container">
        <h2>Login</h2>
            <form className="login-form">
                <label className="label">email:</label>
                <input type="email" placeholder="Enter your email" onChange={handleEmail}/>
    
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