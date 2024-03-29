import React from "react";
import { useState, useEffect } from "react";
import { Link, BrowserRouter,  Routes , Route } from 'react-router-dom';

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ContentCutIcon from '@mui/icons-material/ContentCut';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from "axios";

function SideBar(){
  const { collapseSidebar } = useProSidebar();
  const [userName, setUserName] = useState("");
  let access_token =localStorage.getItem('accesstokenCustomer');
  useEffect(() => {
    axios.get('https://amirmohammadkomijani.pythonanywhere.com/customer/profile/me/',{
      headers:{
        "Content-Type": 'application/json',
        Authorization: `JWT ${access_token}`
      }
    }).then((res)=>{
      setUserName(res.data.first_name);
    }).catch((err)=>{
      // console.log(err)
    })},[])

    return (
        <div className="bg-[#261B39]" id="app" style={({ height: "100vh" }, { display: "flex" })}>
          <Sidebar backgroundColor="#261B39"  style={{ height: "100vh" }} >
            <Menu rootStyles={{color: "#fecbca"}} >
              <MenuItem icon={<MenuOutlinedIcon />} onClick={() => { collapseSidebar(); }} style={{ textAlign: "center" }} >
                {" "}
                <h2>{userName}</h2>
              </MenuItem>
              <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/SalonSelect" />}>Book</MenuItem>
              <MenuItem icon={<ReceiptOutlinedIcon />} component={<Link to="/ProfilePage" />}>Profile</MenuItem>
              <MenuItem onClick={() => {
                localStorage.removeItem('accesstokenCustomer')
                window.location.href = "/LoginCustomer";
                }} icon={<LogoutIcon />} component={<Link to="/LoginCustomer" />}>Log Out</MenuItem>
            </Menu>
          </Sidebar>
          <Routes>
            {/* <Route path="/" element={<Blank />} /> */}
            
          </Routes>
          {/* <main>
            <h1 style={{ color: "#261B39", marginLeft: "5rem" }}>
              React-Pro-Sidebar
            </h1>
          </main> */}
        </div>
    );
}

export default SideBar;