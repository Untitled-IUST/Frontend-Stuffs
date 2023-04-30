import React, {useState, useEffect} from 'react';
//import { idCheck } from './contextAll';
//import { useContext , createContext } from 'react';
import "./customerProfile.css"
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
import { Avatar } from '@mui/material';

export  default function ProfilePage() {
  


  const [Name , setName] = useState("");
  const [LastName , setLastName] = useState("");
  const[phoneNumber , setPhoneNumber] = useState(null);
  const[emailAddress , setEmailAddress] = useState(null);
  const [imgFile, setImgFile] = useState("");
  const [password, setpassword] = useState("");
  let access_token =localStorage.getItem('accesstokenCustomer');
  const [UserName, setUserName] = useState("");
  const [Area, setArea] = useState("");
  //const firstchar = data?.Name?data.Name.charAt(0) : "UN";
  //const firstchar ="";

  useEffect(() => {
    console.log(access_token);
    axios.get('https://amirmohammadkomijani.pythonanywhere.com/customer/profile/me/',{
      headers:{
        "Content-Type": 'application/json',
        Authorization:  `JWT ${access_token}`
      }
    }).then((res)=>{
      // console.log(res.data)
      setName(res.data.first_name);
      setLastName(res.data.last_name);
      setUserName(res.data.user.username);
      setArea(res.data.area);
      setPhoneNumber(res.data.phone_Number);
      //firstchar = res.data.first_name.charAt(0);
      //setEmailAddress(res.data.user.email);
      //setpassword(res.data.user.password);

      setImgFile("https://amirmohammadkomijani.pythonanywhere.com"+res.profile_pic)
      //console.log("https://amirmohammadkomijani.pythonanywhere.com"+res.data.profile_pic);
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
      username : UserName,
      area : Area,
      phone_Number : phoneNumber,
      password : password,
      //profile_pic : imgFile,
      user:{
        username : UserName,
        password : password,
      }

    }
    })
    .then((res) => {
      toast.success("profile updates succesfully");
      window.location.reload(false);
    }
    )
    .catch((error) => {
      console.log(error);
    }); 
    
  }





  return (
    <section style={{ backgroundColor: ''}} >
      <MDBContainer className="py-5" >
        <MDBRow className='rowContainer'>
            <MDBCard class="MDBCard" className="mb-3">
              <MDBCardBody className="text-center">
                <MDBCard className='user'>
                  <div className='divpro'>
                    <h3>
                      My Profile
                    </h3>
                  </div>
                </MDBCard>
                {/* <Avatar>
                  {firstchar}
                </Avatar> */}
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
                  <label>UserName:</label>
                  <input
                      className="personal-form-input"
                      value={UserName}
                      type="text"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </MDBRow>
                  <MDBRow>
                  <label>Area:</label>
                  <input
                      className="personal-form-input"
                      value={Area}
                      type="text"
                      onChange={(e) => setArea(e.target.value)}
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
                  {/* <MDBRow>
                  <label>EmailAddress:</label>
                      <input
                          className="personal-form-input"
                          value={emailAddress}
                          type="email"
                          onChange={(e) => setEmailAddress(e.target.value)}
                        />
                  </MDBRow> */}
                  <MDBRow>
                  <label>Password:</label>
                      <input
                          className="personal-form-input"
                          value={password}
                          type="email"
                          placeholder='*********'
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