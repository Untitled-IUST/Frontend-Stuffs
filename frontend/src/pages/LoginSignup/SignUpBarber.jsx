import React from "react";
import { Link } from "react-router-dom";
import { useState} from "react";
import axios from "axios";
import backGroundImageBarberSignUp from "./images/SignUpBarber.jpg"

function SignUpBarber(){

  const [barberShop , setBarberShop] = useState(null);
  const [owner , setOwner] = useState(null);
  const [parvaneh , setParvaneh] = useState(null);
  const [phoneNumber , setPhoneNumber] = useState(null);
  const [emailAddress , setEmailAddress] = useState(null);
  const [address ,setAddress] = useState(null);
  const [password , setPassword] = useState(null);
  const [confirmPassword , setConfirmPassword] = useState(null);
  const [isPasswordVisible , setIsPasswordVisible] = useState(false);
  const [isCPasswordVisible , setIsCPasswordVisible] = useState(false);
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

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  }
  const toggleCPasswordVisibility = () => {
    setIsCPasswordVisible((prevState) => !prevState);
  }

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
      setAddressError("Please enter address");
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
        url: "http://127.0.0.1:8000/auth/barber/signup/",
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
        alert('Your salon registered succesfully'); 
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
    }
    else{
      setSubmitError("Please check again!");
    }
  }

  return(
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full h-auto bg-white hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
            <img className="mt-20" src={backGroundImageBarberSignUp} alt="SignUp" />
          </div>
          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Sign Up Your Salon</h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" for="SalonName">
                    Salon name
                  </label>
                  <input
                    className="focus:placeholder-gray-500 focus:border-gray-600 w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="SalonName"
										type="text"
										placeholder="SalonName"
                    onChange={handleBarberShop}
                  />
                  <p className="text-xs italic text-red-500">{barberShopError}</p>
                </div>
                <div className="md:ml-2">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="OwnerName">
                    Owner
                  </label>
                  <input
                    className="focus:placeholder-gray-500 focus:border-gray-600 w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="OwnerName"
                    type="text"
                    placeholder="Owner"
                    onChange={handleOwner}
                  />
                  <p className="text-xs italic text-red-500">{ownerError}</p>
                </div>
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" for="Parvaneh">
                    Parvaneh
                  </label>
                  <input
                    className="focus:placeholder-gray-500 focus:border-gray-600 w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="Parvaneh"
										type="number"
										placeholder="Parvaneh"
                    onChange={handleParvaneh}
                  />
                  <p className="text-xs italic text-red-500">{parvanehError}</p>
                </div>
                <div className="md:ml-2">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="PhoneNumber">
                    Phone number
                  </label>
                  <input
                    className="focus:placeholder-gray-500 focus:border-gray-600 w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="PhoneNumber"
                    type="tel"
                    placeholder="Phone number"
                    onChange={handlePhoneNumber}
                  />
                  <p className="text-xs italic text-red-500">{phoneNumberError}</p>
                </div>
              </div>
              <div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="Email">
									Email
								</label>
								<input
									className="focus:placeholder-gray-500 focus:border-gray-600 w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="Email"
									type="email"
									placeholder="Email"
                  onChange={handleEmail}
								/>
                <p className="text-xs italic text-red-500">{emailAddressError}</p>
							</div>
              <div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="SalonAddress">
									Salon address
								</label>
								<input
									className="focus:placeholder-gray-500 focus:border-gray-600 w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="SalonAddress"
									type="text"
									placeholder="Salon address"
                  onChange={handleAddress}
								/>
                <p className="text-xs italic text-red-500">{addressError}</p>
							</div>
              <div className="mb-4 md:flex md:justify-between">
								<div className="relative mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="Password">
										Password
									</label>
									<input
										className="focus:placeholder-gray-500 focus:border-gray-600 w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="Password"
										type={isPasswordVisible ? "text" : "password"}
										placeholder="******************"
                    onChange={handlePassword}
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
									<p className="text-xs italic text-red-500"><p>{passwordError}</p></p>
								</div>
								<div className="relative md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="C_password">
										Confirm Password
									</label>
									<input
										className="focus:placeholder-gray-500 focus:border-gray-600 w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="C_password"
										type={isCPasswordVisible ? "text" : "password"}
										placeholder="******************"
                    onChange={handleConfirmPassword}
									/>
                  <button
                    type="button"
                    className="absolute inset-y-11 right-0 flex items-center px-4 text-gray-600"
                    onClick={toggleCPasswordVisibility}
                  >
                    {isCPasswordVisible ? (
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
                  <p className="text-xs italic text-red-500"><p>{confirmPasswordError}</p></p>
								</div>
							</div>
              <div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
                  onClick={handleSubmit}
								>
									Register Your Salon
								</button>
                <p>{submitError}</p>
							</div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
								<Link
                  to="/LoginBarber"
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
								>
									Already have an account? Login!
								</Link>
							</div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SignUpBarber;