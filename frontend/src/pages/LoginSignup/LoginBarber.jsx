import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import backgroundImageLoginBarber from "./images/LoginBarber.jpg";

function LoginBarber(){

  const [emailAddress , setEmailAddress] = useState("");
  const [emailAddressError , setEmailAddressError] = useState("");
  const [passwordError , setPasswordError] = useState("");
  const [Error , setError] = useState("");
  const [password , setpassword] = useState("");
  const [isPasswordVisible , setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const handleLogin = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/auth/barber/login/",
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
      setEmailAddressError(error.response.data["email"]);
      setPasswordError(error.response.data["password"]);
    }) 
  }

  return(
    <div className="container mx-auto">
			<div className="flex justify-center px-6 my-12">
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					<div className="w-full h-auto bg-white hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
            <img className="mt-10" src={backgroundImageLoginBarber} alt="Login"/>
          </div>
					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-center">Login To Your Salon</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="Email">
									Email
								</label>
								<input
									className="focus:placeholder-gray-500 focus:border-gray-600 w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="Email"
									type="email"
									placeholder="Email"
								/>
                <p className="m-1 text-xs italic text-red-500">{emailAddressError}</p>
							</div>
							<div className="relative mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="Password">
									Password
								</label>
								<input
									className="focus:placeholder-gray-500 focus:border-gray-600 w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="Password"
									type={isPasswordVisible ? "text" : "password"}
									placeholder="******************"
								/>
                <button
                    type="button"
                    className="absolute inset-y-11 right-0 flex items-center px-4 text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
								<p className="text-xs italic text-red-500">{passwordError}</p>
							</div>
              <p className="m-1 text-xs italic text-red-500">{Error}</p>
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
                  onClick={handleLogin}
								>
									Login
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<Link to="/SignUpBarber" className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
									Create an Account!
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
  )
}

export default LoginBarber;