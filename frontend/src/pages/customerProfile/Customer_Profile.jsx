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

export  default function ProfilePage() {
  const { setHasEditedProfile } = useContext(UserProfileContext);


  const [Name , setName] = useState("");
  const [LastName , setLastName] = useState("");
  const[phoneNumber , setPhoneNumber] = useState(null);
  const[emailAddress , setEmailAddress] = useState(null);
  //const [imgFile, setImgFile] = useState(null);
  const [password, setpassword] = useState("");
  let access_token =localStorage.getItem('accessTokenCustomer');
  const [UserName, setUserName] = useState("");
  const [Area, setArea] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
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
      setHasEditedProfile(true);
      console.log("did it?",setHasEditedProfile)
    }).catch((err)=>{
      console.log(err)
    })},[])


    useEffect(() => {
      const fetchImage = async () => {
        try {
          const response = await axios.get('https://amirmohammadkomijani.pythonanywhere.com/customer/profile/me/', {
            headers: {
              'Authorization': `JWT ${access_token}`, 
            },
          });
          setImagePreviewUrl(response.data.profile_pic);
        } catch (error) {
          console.error(error);
        }
      };
      fetchImage();
    }, []);


    //image

    const handleFileInputChange = (event) => {
      setSelectedFile(event.target.files[0]);
      // Preview the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    };


    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('image', selectedFile);
      try {
        const response = await axios.put('https://amirmohammadkomijani.pythonanywhere.com/customer/profile/me/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization' : `JWT ${access_token}`
          },
        });
        console.log(response.data.imageUrl);
        window.location.reload(false);
      } catch (error) {
        console.error(error);
      }
    };
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
      setHasEditedProfile(true);
      console.log("true done",setHasEditedProfile)
    }
    )
    .catch((error) => {
      console.log(error);
    }); 
    
  }





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
                    <form className='axeprofile' onSubmit={handleSubmit}>
                      <input type="file" onChange={handleFileInputChange} alt="avatar" style={{width: "150px"}}/>
                        <button type="submit">Upload</button>
                    </form>
                    {imagePreviewUrl && <img src={imagePreviewUrl} alt="Preview"  style={{ borderRadius: '50%', width: '100px', height: '100px'}}/>}
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
                          className="personal-form-input"
                          value={Name}
                          type="text"
                          id="title"
                          onChange={(e) => setName(e.target.value)}
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
    </div>
  );
                        }