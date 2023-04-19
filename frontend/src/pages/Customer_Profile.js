import React, {useState, useEffect} from 'react';
//import { idCheck } from './contextAll';
//import { useContext , createContext } from 'react';
import "../css/CustomerProfile.css"
import axios from "axios";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import toast from "react-hot-toast";
import { json } from 'react-router-dom';

export  default function ProfilePage() {
  


  const [Name , setName] = useState("");
  const [LastName , setLastName] = useState("");
  const[phoneNumber , setPhoneNumber] = useState(null);
  const[emailAddress , setEmailAddress] = useState(null);
  const [imgFile, setImgFile] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  let access_token =localStorage.getItem('acctoken');
  // console.log(JSON.parse(access_token).access)

  useEffect(() => {
    
  //   axios({method :'get',url:'https://amirmohammadkomijani.pythonanywhere.com/customer/profile/me/', headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `JWT ${access_token}`}
  //     })
  //     .then((res) => {
  //     setName(res.data.first_name);
  //     setLastName(res.data.last_name);
  //     setPhoneNumber(res.data.phone_Number);
  //     setEmailAddress(res.data.email);
  //   }).catch(error => 
  //     seterror(error.response.data))
  // }, []);
    console.log(access_token);
    axios.get('https://amirmohammadkomijani.pythonanywhere.com/customer/profile/me/',{
      headers:{
        "Content-Type": 'application/json',
        Authorization: `JWT ${access_token}`
      }
    }).then((res)=>{
      // console.log(res.data)
      setName(res.data.first_name);
      setLastName(res.data.last_name);
      setPhoneNumber(res.data.phone_Number);
      setEmailAddress(res.data.user.email);
      setpassword(res.data.user.password);
      setImgFile("https://amirmohammadkomijani.pythonanywhere.com"+res.data.profile_pic)
      console.log("https://amirmohammadkomijani.pythonanywhere.com"+res.data.profile_pic);
    }).catch((err)=>{
      console.log(err)
    })},[])
  const handlesubmit = (event) =>
  {
    
    event.preventDefault();
    axios({
      method : "put",
      url : "https://amirmohammadkomijani.pythonanywhere.com/customer/profile/me/",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${access_token}`
    },
    data :
    {
      first_name : Name,
      last_name : LastName,
      phone_Number : phoneNumber,
      email : emailAddress,
      password : password,

    }
    })
    .then((res) => {
      toast.success("profile updates succesfully");
      window.location.reload(false);
    }); 
  }


  useEffect(() =>{
    console.log()
  })



  return (
    <section style={{ backgroundColor: ''}} >
      <MDBContainer className="py-5" >
        <MDBRow className='rowContainer'>
            <MDBCard className="mb-3">
              <MDBCardBody className="text-center">
                <MDBCard className='user'>
                  <div className='divpro'>
                    <h3>
                      My Profile
                    </h3>
                  </div>
                </MDBCard>
                <MDBCardImage
                  src={imgFile}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />

                      <input
                          type="file"
                          id="imageUpload"
                          accept=".png, .jpg, .jpeg"
                          onChange={(e) => {
                            setImgFile(e.target.files[0]);
                          }}/>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0" >
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mbs-4 salam" style={{backgroundColor: ''}}> 
              <MDBCardBody>
                <MDBRow>
                  <MDBRow sm="3">
                  <label htmlFor="title">
                        FirstName:</label>
                      <input
                          className="personal-form-input"
                          value={Name}
                          type="text"
                          id="title"
                          onChange={(e) => setName(e.target.value)}
                          //Name = {data.Name}  
                        />
                  </MDBRow>
                  <MDBRow>
                  <label>LastName:</label>
                  <input
                      className="personal-form-input"
                      value={LastName}
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </MDBRow>
                  <MDBRow>
                  <label>PhoneNumber:</label>
                      <input
                          className="personal-form-input"
                          value={phoneNumber}
                          type="text"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                  </MDBRow>
                  <MDBRow>
                  <label>EmailAddress:</label>
                      <input
                          className="personal-form-input"
                          value={emailAddress}
                          type="email"
                          onChange={(e) => setEmailAddress(e.target.value)}
                        />
                  </MDBRow>
                  <MDBRow>
                  <label>Password:</label>
                      <input
                          className="personal-form-input"
                          value={password}
                          type="email"
                          onChange={(e) => setpassword(e.target.value)}
                        />
                  </MDBRow>
                  <br></br>
                  <MDBCol>
                    <div style={{ display: "flex", alignItems: "flex-end", alignContent: "flex-end"}}>
                      <button
                              type="submit"
                              className="update"
                              onClick={handlesubmit}
                              style={{ marginTop: "0.5rem" }}
                            >
                              Update
                      </button>

                    </div>
                  </MDBCol>

                </MDBRow>
                <MDBRow>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
        </MDBRow>
      </MDBContainer>
    </section>
  );
                        }