import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ResetPassword() {

  const [isPasswordVisible , setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return(
    <div className="bg-WhiteChocolate-500 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto">
          <h3 className="text-AteneoBlue-500 font-bold text-2xl text-center">Reset Password</h3>
          <div className="rounded-lg bg-DesertSand-500">
            <form className="mx-8 mt-6 pt-3 pb-1 rounded">
              <div className="relative mb-2">
                <label className="text-AteneoBlue-500 block mb-2 text-sm font-bold" for="Password">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-AteneoBlue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  </div>
                  <input
                    className="border-WhiteChocolate-500 bg-WhiteChocolate-500 border-2 w-full pl-10 py-2 h-9 text-base text-AteneoBlue-500 leading-tight   rounded appearance-none focus:outline-none"
                    id="Password"
                    type={isPasswordVisible ? "text" : "password"}
                  />
                </div>
                {/* <p className="m-1 text-xs italic text-MediumRuby-500">error</p> */}
                <button
                      type="button"
                      className="text-AteneoBlue-500 absolute inset-y-11 right-0 flex items-center px-2"
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
              </div>
              <div className="relative mb-3">
                <label className="text-AteneoBlue-500 block mb-2 text-sm font-bold" for="Password">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-AteneoBlue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  </div>
                  <input
                    className="border-WhiteChocolate-500 bg-WhiteChocolate-500 border-2 w-full pl-10 py-2 h-9 text-base text-AteneoBlue-500 leading-tight   rounded appearance-none focus:outline-none"
                    id="Password"
                    type={isPasswordVisible ? "text" : "password"}
                  />
                </div>
                {/* <p className="m-1 text-xs italic text-MediumRuby-500">error</p> */}
                <button
                      type="button"
                      className="text-AteneoBlue-500 absolute inset-y-11 right-0 flex items-center px-2"
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
              </div>
              <div className="mb-2 text-center">
                <button
                  className="w-full py-2 font-bold text-white bg-MediumRuby-500 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Reset Password
                </button>
              </div>
              {/* <p className="m-1 text-xs italic text-MediumRuby-500">error</p> */}
              <hr className="mb-3 border-t text-AteneoBlue-500" />
              <Link to="/SignUpCustomer" className="mb-2 bg-AteneoBlue-500 py-2.5 rounded w-full text-center text-white inline-block text-sm align-baseline">
                Create an Account!
              </Link>
            </form>
          </div>
      </div>
    </div>
  )
}

export default ResetPassword;