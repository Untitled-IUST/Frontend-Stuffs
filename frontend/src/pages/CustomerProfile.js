// import React , {useState} from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import '../css/CustomerProfile.css';


// function CustomerProfile(){
//     const [Name , setName] = useState(null);
//     const [LastName , setLastName] = useState(null);
//     const[phoneNumber , setPhoneNumber] = useState(null);
//     const[emailAddress , setEmailAddress] = useState(null);
//     const[password , setPassword] = useState(null);
//     // const[Neighborhood , setAddress] = useState(null);
//     const[ProfilePic , setImgFile] = useState("")
    
//     const handlename = (event) =>
//     {
//         setName(event.target.value);
//     }
//     const handlelastname = (event) =>
//     {
//         setLastName(event.target.value);
//     }
//     const handlePhoneNumber = (event) =>
//     {
//         setPhoneNumber(event.target.value);
//     }
//     const handleEmail = (event) =>
//     {
//         setEmailAddress(event.target.value);
//     }
//     const handlePassword = (event) =>
//     {
//         setPassword(event.target.value);
//     }
//     // const handleaddress = (event) =>
//     // {
//     //     setAddress(event.target.value);
//     // }
//     function handleUpdate(event){
//         event.preventDefault();
//         // axios({
//         //     method: "patch",
//         //     url :"http://127.0.0.1:8000/auth/customer/info/"
//         // })
//     }
//     return(
//         <div className="ProfilePage">
//             <div className="ProfilePage1">
//                 <h2>My Profile</h2>
//                 <label className="label1">FirstName:</label>
//                 <input type="text" className="input1" onChange={handlename}/> 
//                 <label className="label1">LastName:</label>
//                 <input type="text" className="input1" onChange={handlelastname}/> 
//                 <label className="label1">Phone Number:</label> 
//                 <input type="tel" className="input1" onChange={handlePhoneNumber}/>
//                 <label className="label1">Email Address:</label>
//                 <input type="email"  className="input1" onChange={handleEmail}/>
//                 <label className="label1">Password:</label>
//                 <input type="password"  className="input1" onChange={handlePassword} id="pswrd"/>
//                 {/* <label className = "label1">Neighborhood:</label>
//                 <input type="text" className="input1" onChange={handleaddress}/> */}
//                 <img src = "https://s2.uupload.ir/files/348ad8c26d7ff7b6c23fe3e30f3e44dd_ducd.jpg"/>
//                 <input type="file" className="selectimage" id="imageUpload" accept=".png, .jpg, .jpeg"  onChange={(e) =>setImgFile(e.target.files[0])}/>
//                 <button onClick={handleUpdate} className="Update">Update</button> 
//             </div>
//         </div>
//     )
// }
// export default CustomerProfile;