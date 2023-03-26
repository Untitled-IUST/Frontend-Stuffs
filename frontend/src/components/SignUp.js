import React , {useState} from "react";
import "../css/SignUp.css";
import { Link } from "react-router-dom";

const neighborhoods = [
  {
    label: "choose",
    value : "choose"
  }
  ,
  {
    label : "Narmak",
    value : "Narmak"
  }
  ,
  {
    label : "NaziAbad",
    value : "NaziAbad"
  }
]

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
  const [firstName , setFirstName] = useState(null);
  const [lastName , setLastName] = useState(null);
  const[phoneNumber , setPhoneNumber] = useState(null);
  const[neighborhood , setNeighborhood] = useState(null);
  const[emailAddress , setEmailAddress] = useState(null);
  const[password , setPassword] = useState(null);
  const[confirmPassword , setConfirmPassword] = useState(null);
  const[sex, setSex] = useState(null);

  //errors
  const[firstNameError , setFirstNameError] = useState(true);
  const[lastNameError , setLastNameError] = useState(true);
  const[phoneNumberError,setPhoneNumberError] = useState(true);
  const[neighborhoodError , setNeighborhoodError] = useState(true);
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

  const handleFirstName = (event) => {
    if(event.target.value === "")
    {
      setFirstNameError("Please enter first name");
    }
    else if(!validName.test(event.target.value)){
      setFirstNameError("Invalid name");
    }
    else{
      setFirstNameError(false);
      setFirstName(event.target.value);
    }
  }
  const handleLastName = (event) => {
    if(event.target.value === "")
    {
      setLastNameError("Please enter first name");
    }
    else if(!validName.test(event.target.value)){
      setLastNameError("Invalid name");
    }
    else{
      setLastNameError(false);
      setLastName(event.target.value);
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
  const handleNeighborhood = (event) => {
    if(event.target.value === "choose"){
      setNeighborhoodError("Please chose neighborhood");
    }
    else{
      setNeighborhoodError(false);
      setNeighborhood(event.target.value);
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
    else{
      setConfirmPasswordError(false);
      setConfirmPassword(event.target.value);
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
    if(firstNameError === false && lastNameError === false && phoneNumberError === false && neighborhoodError === false && emailAddressError === false && passwordError === false && confirmPasswordError === false && sexError === false){
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
          <div className="firstName">
            <div className="firstName-label">
              <label className="label">First Name:</label>
            </div>
            <div className="firstName-input">
              <input type="text" className="input" onChange={handleFirstName}/>
            </div>
            <div className="firstName-error">
              <p>{firstNameError}</p>
            </div>
          </div>
          <div className="lastName">
            <div className="lastName-label">
              <label className="label">Last Name:</label>
            </div>
            <div className="lastName-input">
              <input type="text" className="input" onChange={handleLastName}/>
            </div>
            <div className="lastName-error"> 
              <p>{lastNameError}</p>
            </div>
          </div>
          <div className="phoneNumber">
            <div className="phoneNumber-label">
              <label className="label">Phone Number</label>
            </div>
            <div className="phoneNumber-input">
              <input type="tel" className="input" onChange={handlePhoneNumber}/>
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
              <input type="email"  onChange={handleEmail}/>
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
              <input type="password" onChange={handlePassword} id="pswrd"/>
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
              <input type="password" onChange={handleConfirmPassword} id="pswrdConfirm"/>
            </div>
            <div className="confirm-eye">
              <input type="checkbox" onClick={toggleConfirmPassword}/>
              <p>show password</p>
            </div>
            <div className="confirm-error">
              <p>{confirmPasswordError}</p>
            </div>
          </div>
          <div className="Neighborhood">
            <div className="neighborhood-label">
              <label className="label">Neighborhood:</label>
            </div>
            <div className="neighborhood-choose">
              <select onChange={handleNeighborhood}>
                {neighborhoods.map((option) =>(
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="neighborhood-error">
              <p>{neighborhoodError}</p>
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
      </div>
        {
          isOpen &&
          <Popup content ={[
            firstName,
            lastName,
            phoneNumber,
            neighborhood,
            emailAddress,
            password,
            sex
          ]}
          handleClose = {HandleClose}
          />
        }
        <div>
          <Link to="/">
            <p>already have an account?Login</p>
          </Link>
        </div>
    </div>
  )

}

const Popup = function(props){
  return(
    <div className="PopUpbox">
      <div className="box">
        <button className="close-icon" onClick={props.handleClose} >close</button>
        <div className="content">
          <p>Successfuly signed in</p>
          <p>first name :{props.content[0]}</p>
          <p>last name :{props.content[1]}</p>
          <p>phone number :{props.content[2]}</p>
          <p>neighborhood :{props.content[3]}</p>
          <p>email :{props.content[4]}</p>
          <p>password :{props.content[5]}</p>
          <p>sex :{props.content[6]}</p>
        </div>
      </div>
    </div>
  )
}
export default SignUp;