import React, { useState, useEffect, useContext } from 'react';
import UserProfileContext from '../SalonPage/UserProfileContext';
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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export  default function ProfilePage() {
  const { setHasEditedProfile } = useContext(UserProfileContext);


  const [Name , setName] = useState("");
  const [LastName , setLastName] = useState("");
  const[phoneNumber , setPhoneNumber] = useState(null);
  const [password, setpassword] = useState("");
  let access_token =localStorage.getItem('accessTokenCustomer');
  const [UserName, setUserName] = useState("");
  const [Area, setArea] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
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
      setSelectedFile(res.data.profile_pic);
      setHasEditedProfile(true);
      console.log("did it?",setHasEditedProfile)
    }).catch((err)=>{
      console.log(err)
    })},[])



    const handleFileInputChange = (event) => {
      setSelectedFile(event.target.files[0]);
      
    };
    console.log("?", selectedFile);

    const handlesubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("profile_pic", selectedFile);
      console.log("dose this work?",selectedFile);
      formData.append('firstname', Name);
      formData.append('last_name', LastName);
      formData.append('phone_Number', phoneNumber);
      formData.append('area', Area);
      formData.append('user.username', UserName);
      formData.append('user.password' , password);
      try {
        const response = await axios.put('https://amirmohammadkomijani.pythonanywhere.com/customer/profile/me/', formData, 
        {
          headers: {
            'Authorization' : `JWT ${access_token}`
          },
        });
        console.log(selectedFile);

        toast.success("profile updates successfully");
        window.location.reload(false);
        setHasEditedProfile(true);
      } catch (error) {
        console.error(error);
      }
    };




  return (
    <div className="bg-WhiteChocolate-500 w-full min-h-screen">

    <section className='backgroundprofile' style={{ backgroundColor: ''}} >
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
                  <div>
                    <form className='axeprofile' onSubmit={handlesubmit}>
                    <label htmlFor="photo" className="custom-file-upload">
                      <i className="fa fa-cloud-upload"></i> <CloudUploadIcon />Upload A Photo
                      </label>
                      <input  id="photo" className='picentry' type="file" onChange={handleFileInputChange} alt="avatar" style={{ display: "none"}}/>
                    </form>
                    {selectedFile && (
      <img
      className='picy'
        src={selectedFile}
        alt="Preview"
        style={{ borderRadius: "50%", width: "100px", height: "100px" }}
      />
    )}
                  </div>
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
                          className="personal-form-input profilelength"
                          value={Name}
                          type="text"
                          id="title"
                          onChange={(e) => setName(e.target.value)}
                        />
                  </MDBRow>
                  <MDBRow>
                  <label>LastName:</label>
                  <input
                      className="personal-form-input profilelength"
                      value={LastName}
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </MDBRow>
                  {/* <MDBRow>
                  <label>Email:</label>
                  <input
                      className="personal-form-input profilelength"
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </MDBRow> */}
                  <MDBRow>
                  <label>UserName:</label>
                  <input
                      className="personal-form-input profilelength"
                      value={UserName}
                      type="text"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </MDBRow>
                  <MDBRow>
                  <label>Area:</label>
                  <input
                      className="personal-form-input profilelength"
                      value={Area}
                      type="text"
                      onChange={(e) => setArea(e.target.value)}
                    />
                  </MDBRow>
                  <MDBRow>
                  <label>PhoneNumber:</label>
                      <input
                          className="personal-form-input profilelength"
                          value={phoneNumber}
                          type="text"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                  </MDBRow>
                  <MDBRow>
                  <label>Password:</label>
                      <input
                          className="personal-form-input profilelength"
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
    </div>
  );
                        }