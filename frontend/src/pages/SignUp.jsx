import React , {useState} from "react";
import "../css/SignUp.css"
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
  const [Name , setName] = useState(null);
  const[phoneNumber , setPhoneNumber] = useState(null);
  const[emailAddress , setEmailAddress] = useState(null);
  const[password , setPassword] = useState(null);
  const[confirmPassword , setConfirmPassword] = useState(null);
  const[sex, setSex] = useState(null);

  //errors
  const[NameError , setNameError] = useState(true);
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

  const handleName = (event) => {
    if(event.target.value === "")
    {
      setNameError("Please enter first name");
    }
    else if(!validName.test(event.target.value)){
      setNameError("Invalid name");
    }
    else{
      setNameError(false);
      setName(event.target.value);
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
      setPasswordError("its not 8 to 15 char.have 1 uppercase,1 lower case and 1 special char");
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
    if(NameError === false  && phoneNumberError ===  false && emailAddressError === false && passwordError === false && confirmPasswordError === false && sexError === false){
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
    <div className="auth-form-container2">
        <h2>Register</h2>
            <form className="signup-form">
              <label2 className="label"> Name:</label2>
              <input type="text" className="input" onChange={handleName}/>
              <p>{NameError}</p>
              <label2 className="label">Phone Number</label2>

              <input type="tel" className="input" onChange={handlePhoneNumber}/>
              <p>{phoneNumberError}</p>

              <label2 className="label">Email Address:</label2>
              <input type="email"  onChange={handleEmail}/>
              <p>{emailAddressError}</p>

              <label2 className="label">Password:</label2>
              <input type="password" onChange={handlePassword} id="pswrd"/>

              <input type="checkbox" onClick={togglePassword}/>
              <p>show password</p>

              <label2 className="label">Confirm Password:</label2>

              <input type="password" onChange={handleConfirmPassword} id="pswrdConfirm"/>

              <input type="checkbox" onClick={toggleConfirmPassword}/> 
              <p>show password</p>


              <label2 className="label">Sex:</label2>

              <select onChange={handleSex}>
                  {Sex.map( (option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
              </select>
              <p>{sexError}</p>
              <label3>{passwordError}</label3>
              <label4>{confirmPasswordError}</label4>
              <button type="submit" onClick={handleSubmit} className="submitButton">
                SignUp
              </button>
              <p>{submitError}</p>
        </form>
        <div>
          <Link to="/">
            <p1>already have an account?Login</p1>
          </Link>
        </div>
      </div>
  

      {
          isOpen &&
          <Popup content ={[
            Name,
            phoneNumber,
            emailAddress,
            password,
            sex
          ]}
          handleClose = {HandleClose}
          />
        }
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
          <p> name :{props.content[0]}</p>
          <p>phone number :{props.content[1]}</p>
          <p>email :{props.content[2]}</p>
          <p>password :{props.content[3]}</p>
          <p>sex :{props.content[4]}</p>
        </div>
      </div>
    </div>
  )
}
export default SignUp;