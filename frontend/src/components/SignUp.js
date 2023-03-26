import React , {useState} from "react";

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
  const[firstNameError , setFirstNameError] = useState(false);
  const[lastNameError , setLastNameError] = useState(false);
  const[phoneNumberError,setPhoneNumberError] = useState(false);
  const[neighborhoodError , setNeighborhoodError] = useState(false);
  const[emailAddressError , setEmailAddressError] = useState(false);
  const[passwordError , setPasswordError] = useState(false);
  const[confirmPasswordError , setConfirmPasswordError] = useState(false);
  const[sexError , setSexError] = useState(false);
  const[submitError , setSubmitError] = useState(false);
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
    <div className="form">
      <div>
        <h1>SignUp</h1>
      </div>
      <form>
        <div className="firstName">
          <label className="label">First Name:</label>
          <input type="text" className="input" onChange={handleFirstName}/>
          <p>{firstNameError}</p>
        </div>
        <div className="lastName">
          <label className="label">Last Name:</label>
          <input type="text" className="input" onChange={handleLastName}/>
          <p>{lastNameError}</p>
        </div>
        <div className="PhoneNumber">
          <label className="label">Phone Number</label>
          <input type="tel" className="input" onChange={handlePhoneNumber}/>
          <p>{phoneNumberError}</p>
        </div>
        <div className="Neighborhood">
          <label className="label">Neighborhood:</label>
          <select onChange={handleNeighborhood}>
            {neighborhoods.map((option) =>(
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <p>{neighborhoodError}</p>
        </div>
        <div className="EmailAddress">
          <label className="label">Email Address:</label>
          <input type="email"  onChange={handleEmail}/>
          <p>{emailAddressError}</p>
        </div>
        <div className="Password">
          <label className="label">Password:</label>
          <input type="password" onChange={handlePassword} id="pswrd"/>
          <input type="checkbox" onClick={togglePassword}/>show password
          <p>{passwordError}</p>
        </div>
        <div className="ConfirmPassword">
          <label className="label">Confirm Password:</label>
          <input type="password" onChange={handleConfirmPassword} id="pswrdConfirm"/>
          <input type="checkbox" onClick={toggleConfirmPassword}/>show password
          <p>{confirmPasswordError}</p>
        </div>
        <div className="Sex">
          <label className="label">Sex:</label>
          <select onChange={handleSex}>
              {Sex.map( (option) => (
                <option value={option.value}>{option.label}</option>
              ))}
          </select>
          <p>{sexError}</p>
        </div>
        <div className="SubmitButton">
          <button type="submit" onClick={handleSubmit} className="Button">
            SignUp
          </button>
          <p>{submitError}</p>
        </div>
      </form>
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