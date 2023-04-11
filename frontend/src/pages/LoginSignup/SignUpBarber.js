import React , {useState} from "react";
import "../../css/SignUpBarber.css"
import { Link } from "react-router-dom";
import axios from "axios";


const Sex = [
  {
    label: "choose",
    value : "choose"
  }
  ,
  {
    label : "Male",
    value : "M"
  },
  {
    label : "Female",
    value : "F" 
  }
]
function SignUpBarber(){
  //inputs
  const [barberShop , setBarberShop] = useState(null);
  const [owner , setOwner] = useState(null);
  const [parvaneh , setParvaneh] = useState(null);
  const [phoneNumber , setPhoneNumber] = useState(null);
  const [emailAddress , setEmailAddress] = useState(null);
  const [address ,setAddress] = useState(null);
  const [password , setPassword] = useState(null);
  const [confirmPassword , setConfirmPassword] = useState(null);

  //errors
  const[barberShopError , setBarberShopError] = useState(true);
  const[ownerError , setOwnerError] = useState(true);
  const[parvanehError , setParvanehError] = useState(true);
  const[phoneNumberError,setPhoneNumberError] = useState(true);
  const[emailAddressError , setEmailAddressError] = useState(true);
  const[addressError , setAddressError] = useState(true);
  const[passwordError , setPasswordError] = useState(true);
  const[confirmPasswordError , setConfirmPasswordError] = useState(true);
  const[submitError , setSubmitError] = useState(true);
  //popups
  //const[isOpen ,setIsOpen] = useState(false);

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

  const handleBarberShop = (event) => {
    if(event.target.value === "")
    {
      setBarberShopError("Please enter your shop name");
    }
    else if(!validName.test(event.target.value)){
      setBarberShopError("Invalid name");
    }
    else{
      setBarberShopError(false);
      setBarberShop(event.target.value);
    }
  }
  const handleOwner = (event) => {
    if(event.target.value === "")
    {
      setOwnerError("Please enter owner name");
    }
    else if(!validName.test(event.target.value)){
      setOwnerError("Invalid name");
    }
    else{
      setOwnerError(false);
      setOwner(event.target.value);
    }
  }

  const handleParvaneh = (event) => {
    if(event.target.value === "")
    {
      setParvanehError("Please enter parvaneh");
    }
    else{
      setParvanehError(false);
      setParvaneh(event.target.value);
    }
  }

  const handlePhoneNumber = (event) => {
    if(event.target.value === ""){
      setPhoneNumberError("Please enter phone number");
    }
    else if(!validPhoneNumber.test(event.target.value)){
      setPhoneNumberError("Please enter valid mobile phone number");
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
  const handleAddress = (event) => {
    if(event.target.value === ""){
      setConfirmPasswordError("Please enter address");
    }
    else{
      setAddressError(false);
      setAddress(event.target.value);
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    if(barberShopError === false && ownerError === false && parvanehError === false && phoneNumberError === false && emailAddressError === false && addressError === false && passwordError === false && confirmPasswordError === false)
    {
      axios({
        method: "post",
        url: "https://amirmohammadkomijani.pythonanywhere.com/auth/barber/signup/",
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
          "BarberShop": barberShop,
          "Owner": owner,
          "Parvaneh": parvaneh,
          "phone_Number": phoneNumber,
          "email": emailAddress,
          "address": address,
          "password": password
        }
      })
      .then((res) => {
        console.log('.') 
        alert('Your account registered succesfully'); 
  
      })
      .catch(error => {
        setBarberShopError(error.response.data["BarberShop"]);
        setOwnerError(error.response.data["Owner"]);
        setParvanehError(error.response.data["Parvaneh"]);
        setPhoneNumberError(error.response.data["phone_Number"]);
        setEmailAddressError(error.response.data["email"]);
        setPasswordError(error.response.data["password"]);
      }) 
      setSubmitError(false)
      //setIsOpen(true);
    }

    else{
      setSubmitError("Please check again!");
    }
  }

  // const HandleClose = () => {
  //   setIsOpen(false);
  // }
  return(
    <div className="SignUpPage">
    <div className="auth-form-container2">
        <h2>Register</h2>
            <form className="signup-form">
              <label className="label">BarberShop</label>
              <input type="text" className="input" onChange={handleBarberShop}/>
              <p>{barberShopError}</p>

              <label className="label">Owner</label>
              <input type="text" className="input" onChange={handleOwner}/>
              <p>{ownerError}</p>

              <label className="label">Parvaneh</label>
              <input type="number" className="input" onChange={handleParvaneh}/>
              <p>{parvanehError}</p>

              <label className="label">Phone Number</label>
              <input type="tel" className="input" onChange={handlePhoneNumber}/>
              <p>{phoneNumberError}</p>

              <label className="label">Email Address</label>
              <input type="email"  onChange={handleEmail}/>
              <p>{emailAddressError}</p>

              <label className="label">Address</label>
              <input type="email"  onChange={handleAddress}/>
              <p>{addressError}</p>

              <label className="label">Password</label>
              <input type="password" onChange={handlePassword} id="pswrd"/>
              <p>{passwordError}</p>

              <input type="checkbox" onClick={togglePassword}/>
              <p>show password</p>

              <label className="label">Confirm Password</label>
              <input type="password" onChange={handleConfirmPassword} id="pswrdConfirm"/>
              <p>{confirmPasswordError}</p>

              <input type="checkbox" onClick={toggleConfirmPassword}/> 
              <p>show password</p>
              
              <button type="submit" onClick={handleSubmit} className="submitButton">
                SignUp
              </button>
              <p>{submitError}</p>
              <Link to="/LoginBarber">
            <p1>already have an account?Login</p1>
          </Link>
          <Link to="/">
            <p1>Im not a barber!</p1>
          </Link>
        </form>
      </div>
  

      {/* {
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
        } */}
    </div>
  )

}

// const Popup = function(props){
//   return(
//     <div className="PopUpbox">
//       <div className="box">
//         <button className="close-icon" onClick={props.handleClose} >close</button>
//         <div className="content">
//           <p>Successfuly signed in</p>
//           <p> name :{props.content[0]}</p>
//           <p>phone number :{props.content[1]}</p>
//           <p>email :{props.content[2]}</p>
//           <p>password :{props.content[3]}</p>
//           <p>sex :{props.content[4]}</p>
//         </div>
//       </div>
//     </div>
//   )
// }
export default SignUpBarber;