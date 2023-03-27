import React , {useState} from "react";
import { Link } from "react-router-dom";

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
      <div className="form">
        <div className="LoginBanner">
          <h1>Login</h1>
        </div>
        <form className="LoginForm">
          <div className="emailAddress">
            <div className="emailAddress-label">
              <label className="label">email:</label>
            </div>
            <div className="emailAddress-input">
              <input type="email" placeholder="Enter your email" onChange={handleEmail}/>
            </div>
          </div>
          <div className="password">
            <div className="password-label">
              <label className="label">password</label>
            </div>
            <div className="password-input">
              <input type="password" placeholder="Enter your password"/>
            </div>
          </div>
          <div className="SubmitButton">
            <div className="submit-button">
              <button type="submit" className="submitButton" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </form>
        <div>
          <Link to="/SignUp">
            dont have an account?SignUp
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login;