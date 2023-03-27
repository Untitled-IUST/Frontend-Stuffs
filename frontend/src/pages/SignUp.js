import React , {useState} from "react";
import { Link } from "react-router-dom";

const Sex = [
  {
    label: "choose",
    value : "choose"
  }
  ,
  {
    label : "Male",
    value : "Male"
  },
  {
    label : "Female",
    value : "Female"
  }
]
function SignUp(){
  //inputs
  const [fullName , setFullName] = useState(null);
  const[phoneNumber , setPhoneNumber] = useState(null);
  const[emailAddress , setEmailAddress] = useState(null);
  const[password , setPassword] = useState(null);
  const[sex, setSex] = useState(null);

  //errors
  const[fullNameError , setFullNameError] = useState(true);
  const[phoneNumberError,setPhoneNumberError] = useState(true);
  const[emailAddressError , setEmailAddressError] = useState(true);
  const[passwordError , setPasswordError] = useState(true);
  const[confirmPasswordError , setConfirmPasswordError] = useState(true);
  const[sexError , setSexError] = useState(true);
  const[submitError , setSubmitError] = useState(true);
  //popups
  const[isOpen ,setIsOpen] = useState(false);

  const validName = new RegExp(
    /^[a-zA-Z ]{2,30}$/
  );
  const validPhoneNumber = new RegExp(
    "09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}"
  );
  const validEmailAddress = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  const validPassword = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
  );

  const handleFullName = (event) => {
    if(event.target.value === "")
    {
      setFullNameError("Please enter first name");
    }
    else if(!validName.test(event.target.value)){
      setFullNameError("Invalid name");
    }
    else{
      setFullNameError(false);
      setFullName(event.target.value);
    }
  }
  const handlePhoneNumber = (event) => {
    if(event.target.value === ""){
      setPhoneNumberError("Please enter phone number");
    }
    else if(!validPhoneNumber.test(event.target.value)){
      setPhoneNumberError("Please enter valid phone number");
    }
    else{
      setPhoneNumberError(false);
      setPhoneNumber(event.target.value);
    }
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
    else if(!validPassword.test(event.target.value)){
      setPasswordError("Password should have 8 to 15 characters. have one uppercase and one lower case and one special character");
    }
    else{
      setPasswordError(false);
      setPassword(event.target.value);
    }
  }
  const handleConfirmPassword = (event) => {
    if(event.target.value === ""){
      setConfirmPasswordError("Please confirm password");
    }
    else if(event.target.value !== password){
      setConfirmPasswordError("password != confirm password");
    }
  }
  const handleSex = (event) => {
    if(event.target.value === "choose"){
      setSexError("Please choose sex");
    }
    else {
      setSexError(false);
      setSex(event.target.value);
    }
  }
  const togglePassword = (event) => {
    let x = document.getElementById("pswrd");
    if(x.type === "password"){
      x.type = "text";
    } else {
      x.type = "password"
    }
  }
  const toggleConfirmPassword = (event) => {
    let x = document.getElementById("pswrdConfirm");
    if(x.type === "password"){
      x.type = "text";
    } else {
      x.type = "password"
    }
  }
  function handleSubmit(event){
    event.preventDefault();
    if(fullNameError === false && phoneNumberError === false && emailAddressError === false && passwordError === false && confirmPasswordError === false && sexError === false){
      setSubmitError(false)
      setIsOpen(true);
    }
    else{
      setSubmitError("Please check again!");
    }
  }

  const HandleClose = () => {
    setIsOpen(false);
  }
  return(
    <div className="SignUpPage">
      <div className="form">
        <div className="SignUpBanner">
          <h1>SignUp</h1>
        </div>
        <form className="SignUpForm">
          <div className="fullName">
            <div className="fullName-label">
              <label className="label">Full Name:</label>
            </div>
            <div className="fullName-input">
              <input type="text" className="input" onChange={handleFullName} placeholder="Enter full name"/>
            </div>
            <div className="fullName-error">
              <p>{fullNameError}</p>
            </div>
          </div>
          <div className="phoneNumber">
            <div className="phoneNumber-label">
              <label className="label">Phone Number</label>
            </div>
            <div className="phoneNumber-input">
              <input type="tel" className="input" onChange={handlePhoneNumber} placeholder="Enter phone number"/>
            </div>
            <div className="phoneNumber-error"> 
              <p>{phoneNumberError}</p>
            </div>
          </div>
          <div className="emailAddress">
            <div className="emailAddress-label">
              <label className="label">Email Address:</label>
            </div>
            <div className="emailAddress-input">
              <input type="email"  onChange={handleEmail} placeholder="Enter email"/>
            </div>
            <div className="emailAddress-error">
              <p>{emailAddressError}</p>
            </div>
          </div>
          <div className="password">
            <div className="password-label">
              <label className="label">Password:</label>
            </div>
            <div className="password-input">
              <input type="password" onChange={handlePassword} id="pswrd" placeholder="Enter password"/>
            </div>
            <div className="password-eye">
              <input type="checkbox" onClick={togglePassword}/>
              <p>show password</p>
            </div>
            <div className="password-error">
              <p>{passwordError}</p>
            </div>
          </div>
          <div className="confirmPassword">
            <div className="confirm-label">
              <label className="label">Confirm Password:</label>
            </div>
            <div className="confirm-input"> 
              <input type="password" onChange={handleConfirmPassword} id="pswrdConfirm" placeholder="Confirm your password"/>
            </div>
            <div className="confirm-eye">
              <input type="checkbox" onClick={toggleConfirmPassword}/>
              <p>show password</p>
            </div>
            <div className="confirm-error">
              <p>{confirmPasswordError}</p>
            </div>
          </div>
          <div className="Sex">
            <div className="sex-label">
              <label className="label">Sex:</label>
            </div>
            <div className="sex-choose">
              <select onChange={handleSex}>
                  {Sex.map( (option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
              </select>
            </div>
            <div className="sex-error">
              <p>{sexError}</p>
            </div>
          </div>
          <div className="SubmitButton">
            <div className="submit-button">
              <button type="submit" onClick={handleSubmit} className="submitButton">
                SignUp
              </button>
            </div>
            <div className="submit-error">
              <p>{submitError}</p>
            </div>
          </div>
        </form>
        <div>
          <Link to="/">
            <p>already have an account?Login</p>
          </Link>
        </div>
      </div>
    </div>
  )

}


export default SignUp;