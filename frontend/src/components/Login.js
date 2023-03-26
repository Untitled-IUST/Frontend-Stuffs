import React from "react";
import { Link } from "react-router-dom";

function Login(){
  return(
    <div>
      <h1>hi</h1>
      <div>
        <Link to="/SignUp">
          dont have an account?SignUp
        </Link>
      </div>
    </div>
  )
}

export default Login;