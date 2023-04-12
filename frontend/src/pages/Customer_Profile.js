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

export  default function ProfilePage() {
  const [Name , setName] = useState("");
  const [LastName , setLastName] = useState("");
  const[phoneNumber , setPhoneNumber] = useState(null);
  const[emailAddress , setEmailAddress] = useState(null);
  const [imgFile, setImgFile] = useState("");
  const [data, setdata] = useState("");

  //const [userProfileFlag, setUserProfileFlag] = useState(false);
  //const[password , setpassword] = useState(null);
  //const {id,setID} = useContext (idCheck);
  const handlesubmit = (event) =>
  {
    event.preventDefault();
    axios({
      method : "patch",
      url : "https://amirmohammadkomijani.pythonanywhere.com/customer/info/2/",
      headers: {
        'Content-Type': 'application/json',
    },
    data :
    {
      first_name : Name,
      last_name : LastName,
      phone_number : phoneNumber,
      email : emailAddress,
    }
    })
    .then((res) => {
      toast.success("profile updates succesfully");
      setName(Name);
    }); 
  }

  // useEffect(() => {
  //   axios
  //     .get("https://amirmohammadkomijani.pythonanywhere.com/customer/info/2/")
  //     .then((res) => {
  //       setImgFile(res.imgFile)

  //     })
  // },[]);


  useEffect(() => {
    axios
      .get("https://amirmohammadkomijani.pythonanywhere.com/customer/info/2/")
      .then((res) => {
      setName(data.Name);
      setLastName(data.LastName);
      setPhoneNumber(data.phoneNumber);
    });
  }, []);



  return (
    <section style={{ backgroundColor: '#120d1c'}} >
      <MDBContainer className="py-5">
        <MDBRow >
  
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4" >
              <MDBBreadcrumb active>User Profile</MDBBreadcrumb>
            </MDBBreadcrumb>


        </MDBRow>

        <MDBRow>
            <MDBCard className="mb-4" style={{backgroundColor: '#ffecee'}}>
              <MDBCardBody className="text-center">
                <MDBCardImage
                  //src=imgFile.{profile_picture}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />

                    <label className="uploadImg" for="imageUpload">
                        upload your photo

                      </label>
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

            <MDBCard className="mb-4" style={{backgroundColor: '#ffecee'}}> 
              <MDBCardBody>
                <MDBRow>
                  <MDBRow sm="3">
                  <label htmlFor="title">
                        FirstName:</label>
                      <input
                          className="personal-form-input"
                          value={data.Name}
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
                  {/* <MDBRow>
                  <label>Password:</label>
                      <input
                          className="personal-form-input"
                          value={password}
                          type="email"
                          onChange={(e) => setpassword(e.target.value)}
                        />
                  </MDBRow> */}
                  <MDBCol>
                  <button
                          type="submit"
                          className="update"
                          onClick={handlesubmit}
                        >
                          Update
                        </button>
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