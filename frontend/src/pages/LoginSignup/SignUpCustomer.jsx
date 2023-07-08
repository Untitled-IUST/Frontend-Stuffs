import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorIcon from '@mui/icons-material/Error';
import backGroundImageBarberSignUp from "./Images/SignUpCustomer.png";
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';

function SignUpBarber(){
  //states
  const [username , setUsername] = useState(null);
  const [emailAddress , setEmailAddress] = useState(null);
  const [password , setPassword] = useState(null);
  const [tempPass , setTempPass] = useState(null);
  const [confirmPassword , setConfirmPassword] = useState(null);
  const [isPasswordVisible , setIsPasswordVisible] = useState(false);
  const [isCPasswordVisible , setIsCPasswordVisible] = useState(false);
  //errors
  const[usernameError,setUsernameError] = useState(true);
  const[usernameCharError , setusernameCharError] = useState(true);
  const[usernameLetterError , setusernameLetterError] = useState(true);
  const[usernameLengthError , setusernameLengthError] = useState(true);
  const[emailAddressError , setEmailAddressError] = useState(true);
  const[passwordError , setPasswordError] = useState(true);
  const[passwordLengthError , setPasswordLengthError] = useState(true);
  const[passwordUpperLowerError , setPasswordUpperLowerError] = useState(true);
  const[passwordSpecialError , setPasswordSpecialError] = useState(true);
  const[passwordContainsDigitError, setPasswordContainsDigitError] = useState(true);

  const[confirmPasswordError , setConfirmPasswordError] = useState(true);
  const[submitError , setSubmitError] = useState(true);
  const[RegisterLoading , setLoading] = useState(false);
  let navigate = useNavigate();

  const validPasswordLength = new RegExp(
    /^.{8,15}$/
  );
  const validPasswordLowerUpper = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z]).+$/
  );
  const validPasswordSpecialChar = new RegExp(
    /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/
  );
  const validPassowrdContainsDigit = new RegExp(
    /^(?=.*\d).+$/
  );
  const validUsernameFirstCharisLetter = new RegExp(
    /^[A-Za-z].*$/
  );
  const validUsernameLetter = new RegExp(
    /^[a-zA-Z0-9_]*$/
  );
  const validUsernameLength = new RegExp(
    /^.{4,15}$/
  );
  const validEmailAddress = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  }
  const toggleCPasswordVisibility = () => {
    setIsCPasswordVisible((prevState) => !prevState);
  }

  const handleEmail = (event) => {
    if(event.target.value === "")
    {
      setEmailAddressError("Please enter email");
    }
    else if(!validEmailAddress.test(event.target.value)){
      setEmailAddressError("Invalid email");
    }
    else{
      setEmailAddressError(false);
      setEmailAddress(event.target.value);
    }
  }

  const handlePassword = (event) => {
    if(event.target.value === ""){
      setPasswordError("Please enter password");
    }
    else {
      setPasswordError(false);
    }
    if(!  validPassowrdContainsDigit.test(event.target.value) && event.target.value !== ""){
      setPasswordContainsDigitError("password must contain digit.");
    }
    else{
      setPasswordContainsDigitError(false);
    }
    if(!  validPasswordLength.test(event.target.value) && event.target.value !== ""){
      setPasswordLengthError("password must have 8 to 15 characters");
    }
    else{
      setPasswordLengthError(false);
    }
    if(!  validPasswordLowerUpper.test(event.target.value) && event.target.value !== ""){
      setPasswordUpperLowerError("password must contain uppercase and lowercase");
    }
    else{
      setPasswordUpperLowerError(false);
    }
    if(!  validPasswordSpecialChar.test(event.target.value) && event.target.value !== ""){
      setPasswordSpecialError("password must contain special character");
    }
    else{
      setPasswordSpecialError(false);
    }

    if(passwordError === false && !validPasswordLength.test(event.target.value) === false && passwordSpecialError === false && passwordUpperLowerError === false && passwordContainsDigitError === false){
      setPassword(event.target.value);
      if(event.target.value !== confirmPassword){
        setConfirmPasswordError("passwords do not match");
      }
      else{
        setConfirmPasswordError("");
      }
    }
  }

  const handleConfirmPassword = (event) => {
    if(event.target.value === ""){
      setConfirmPasswordError("Please confirm password");
    }
    else if(event.target.value !== tempPass){
      setConfirmPasswordError("passwords do not match");
    }
    else{
      setConfirmPasswordError(false);
      setConfirmPassword(event.target.value);
    }
  }
  const handleUsername = (event) => {
    if(event.target.value === ""){
      setUsernameError("Please enter username");
    }
    else{
      setUsernameError(false);
    }
    if(!validUsernameFirstCharisLetter.test(event.target.value) && event.target.value !== ""){
      setusernameCharError("Username must start with a letter.");
    }
    else{
      setusernameCharError(false);
    }
    if(!validUsernameLetter.test(event.target.value) && event.target.value !== ""){
      setusernameLetterError("Username must contain only letters,numbers and underscores.");
    }
    else{
      setusernameLetterError(false);
    }
    if(!validUsernameLength.test(event.target.value) && event.target.value !== ""){
      setusernameLengthError("Username must have 4 to 15 characters.");
    }
    else{
      setusernameLengthError(false);
    }
    if(usernameError === false && usernameCharError === false && !validUsernameLength.test(event.target.value) === false && usernameLetterError === false){
      setUsername(event.target.value);
    }
  }
  
  function handleSubmit(event){
    event.preventDefault();
    if(emailAddress !== null){
      setEmailAddress(emailAddress.toLowerCase())
    }
    if(username !== null){
      setUsername(username.toLowerCase())
    }
    setSubmitError("");
    if(passwordContainsDigitError === false && passwordSpecialError === false && passwordUpperLowerError === false && passwordLengthError === false && emailAddressError === false && passwordError === false && confirmPasswordError === false && usernameError === false && usernameCharError === false && usernameLetterError === false && usernameLengthError === false)
    {
      setLoading(true);
      axios({
        method: "post",
        url: "https://amirmohammadkomijani.pythonanywhere.com/auth/users/",
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
          "role" : "customer",
          "username" : username,
          "email": emailAddress,
          "password": password
        }
      })
      .then((res) => {
        localStorage.setItem('RegisterChecker','1');        
        navigate('/LoginCustomer');
      })
      .catch(error => {
        setUsernameError(error.response.data["username"]);
        setEmailAddressError(error.response.data["email"]);
        setPasswordError(error.response.data["password"]);
        console.log(error.response.data);
        setLoading(false);
      }) 
      setSubmitError(false)
    }
    else{
      setSubmitError("Please check again!");
    }
  }

  const handleChangePassword = (event) => {
    handlePassword(event);
    setTempPass(event.target.value);
  };
  return(
    <div className="min-h-screen bg-WhiteChocolate-500 flex flex-col justify-center">
    <div className="flex items-center">
      <div className="container mx-auto">
        <div className="flex justify-center mx-3">
          <div className="bg-WhiteChocolate-500 w-full flex appearance-none">
            <div className="w-full items-center hidden lg:flex lg:w-1/2 bg-cover rounded-l-lg">
              <img src={backGroundImageBarberSignUp} alt="SignUp" />
            </div>
            <div className="w-full lg:w-1/2 rounded-lg lg:rounded-l-none flex flex-col justify-center">
              <h3 className="text-AteneoBlue-500 mt-12 text-2xl font-bold text-center">Sign Up</h3>
              <form className="mx-8 mt-6 pb-8 mb-4 rounded">
              <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-AteneoBlue-500" for="Username">
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-AteneoBlue-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <input
                      className="bg-DesertSand-500 border-2 border-DesertSand-500 w-full pl-10 py-2 h-9 text-base text-AteneoBlue-500 leading-tight   rounded appearance-none focus:outline-none"
                      id="Username"
                      type="text"
                      onChange={handleUsername}
                    />
                  </div>
                  <p className="font-bold m-1 text-xs italic text-MediumRuby-500">{(typeof usernameError === 'string' || typeof usernameError === 'object' )&& (<React.Fragment><ErrorIcon fontSize="small"/><span>{usernameError}</span></React.Fragment>)}</p>
                  <p className="font-bold m-1 text-xs italic text-MediumRuby-500">{typeof usernameCharError === 'string' && (<React.Fragment><ErrorIcon fontSize="small"/><span>{usernameCharError}</span></React.Fragment>)}</p>
                  <p className="font-bold m-1 text-xs italic text-MediumRuby-500">{typeof usernameLetterError === 'string' &&  (<React.Fragment><ErrorIcon fontSize="small"/><span>{usernameLetterError}</span></React.Fragment>)}</p>
                  <p className="font-bold m-1 text-xs italic text-MediumRuby-500">{typeof usernameLengthError === 'string' &&  (<React.Fragment><ErrorIcon fontSize="small"/><span>{usernameLengthError}</span></React.Fragment>)}</p>
                </div>
                <div className="mb-4">
                  <label className="text-AteneoBlue-500 block mb-2 text-sm font-bold" for="Email">
                    Email
                  </label>
                  <div className="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" class="w-5 h-5 text-AteneoBlue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input
                      className="bg-DesertSand-500 border-2 border-DesertSand-500  w-full pl-10 py-2 h-9 text-base text-AteneoBlue-500 leading-tight   rounded appearance-none focus:outline-none"
                      id="Email"
                      type="email"
                      onChange={handleEmail}
                    />
                  </div>
                  <p className="font-bold m-1 text-xs italic text-MediumRuby-500">{(typeof emailAddressError === 'string' || typeof emailAddressError === 'object') &&  (<React.Fragment><ErrorIcon fontSize="small"/><span>{emailAddressError}</span></React.Fragment>)}</p>
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="relative mb-4 md:mr-2 md:mb-0">
                    <div className="flex flex-row justify-between">
                      <label className="text-AteneoBlue-500 block mb-2 text-sm font-bold" for="Password">
                        Password
                      </label>
                      <Link to="/ForgotPassword" className="text-AteneoBlue-500 text-sm font-bold hover:text-AteneoBlue-300 focus:text-AteneoBlue-500">
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="flex">
                      <div className="border-DesertSand-500 bg-DesertSand-500 rounded-l flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-AteneoBlue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                      </div>
                      <input
                        className="border-DesertSand-500 bg-DesertSand-500 border-2 w-full pl-2 py-2 h-9 text-base text-AteneoBlue-500 leading-tight appearance-none focus:outline-none"
                        id="Password"
                        type={isPasswordVisible ? "text" : "password"}
                        onChange={handleChangePassword}
                      />
                      <button
                        type="button"
                        className="bg-DesertSand-500 border-DesertSand-500 border-2 rounded-r flex items-center px-2 text-AteneoBlue-500"
                        onClick={togglePasswordVisibility}
                      >
                        {isPasswordVisible ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 hover:scale-110"
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
                            className="w-5 h-5 hover:scale-110"
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
                    <p className="font-bold m-1 text-xs italic text-MediumRuby-500"><p>{typeof passwordError ==='string' &&  (<React.Fragment><ErrorIcon fontSize="small"/><span>{passwordError}</span></React.Fragment>)}</p></p>
                    <p className="font-bold m-1 text-xs italic text-MediumRuby-500"><p>{typeof passwordContainsDigitError  ==='string' &&  (<React.Fragment><ErrorIcon fontSize="small"/><span>{passwordContainsDigitError}</span></React.Fragment>) }</p></p>
                    <p className="font-bold m-1 text-xs italic text-MediumRuby-500"><p>{typeof passwordLengthError  ==='string' &&  (<React.Fragment><ErrorIcon fontSize="small"/><span>{passwordLengthError}</span></React.Fragment>)}</p></p>
                    <p className="font-bold m-1 text-xs italic text-MediumRuby-500"><p>{typeof passwordSpecialError  ==='string' &&  (<React.Fragment><ErrorIcon fontSize="small"/><span>{passwordSpecialError}</span></React.Fragment>)}</p></p>
                    <p className="font-bold m-1 text-xs italic text-MediumRuby-500"><p>{typeof passwordUpperLowerError  ==='string' &&  (<React.Fragment><ErrorIcon fontSize="small"/><span>{passwordUpperLowerError}</span></React.Fragment>)}</p></p>

                  </div>
                  <div className="relative md:ml-2">
                    <label className="text-AteneoBlue-500 block mb-2 text-sm font-bold" for="C_password">
                      Confirm Password
                    </label>
                    <div className="flex">
                      <div className="border-DesertSand-500 bg-DesertSand-500 rounded-l flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-AteneoBlue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                      </div>
                      <input
                        className="py-2 border-DesertSand-500 bg-DesertSand-500 border-2 w-full pl-2 h-9 text-base text-AteneoBlue-500 leading-tight appearance-none focus:outline-none"
                        id="C_password"
                        type={isCPasswordVisible ? "text" : "password"}
                        onChange={handleConfirmPassword}
                      />
                      <button
                        type="button"
                        className="border-DesertSand-500 bg-DesertSand-500 rounded-r flex items-center px-2 text-AteneoBlue-500"
                        onClick={toggleCPasswordVisibility}
                      >
                        {isCPasswordVisible ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 hover:scale-110"
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
                            className="w-5 h-5 hover:scale-110"
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
                    <p className="font-bold m-1 text-xs italic text-MediumRuby-500"><p>{typeof confirmPasswordError   ==='string' &&  (<React.Fragment><ErrorIcon fontSize="small"/><span>{confirmPasswordError}</span></React.Fragment>)}</p></p>
                  </div>
                </div>
                <div className="mb-4 text-center">
                  <LoadingButton
                    loadingIndicator = {<CircularProgress style={{ color: 'white' }} size={25}/>}
                    className="w-full py-2 focus:outline-none focus:shadow-outline"
                    onClick={handleSubmit}
                    loading ={RegisterLoading}
                    sx={
                      {
                        fontWeight : 'bold',
                        color : 'white',
                        backgroundColor : '#AC3B61',
                        "&:hover" : {backgroundColor : "#892F4D" , outline : "none"},
                        "&:focus" : {backgroundColor : "#892F4D", outline : "none" },
                        borderRadius : "0.25rem"
                      }
                    }
                  >
                    Register
                  </LoadingButton>
                  <p className="font-bold m-1 text-xs italic text-MediumRuby-500">{typeof submitError   ==='string' &&  (<React.Fragment><ErrorIcon fontSize="small"/><span>{submitError}</span></React.Fragment>)}</p>
                </div>
                <hr className="mb-3 border-t text-AteneoBlue-500" />
                <Link to="/LoginCustomer" className="hover:bg-AteneoBlue-400 focus:bg-AteneoBlue-500 inline-block text-sm text-white align-baseline py-2.5 w-full rounded bg-AteneoBlue-500 text-center focus:text-white">
                  Already have an account? Login!
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUpBarber;