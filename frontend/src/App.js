import { useState, useEffect } from "react";
import { Link, BrowserRouter,  Routes , Route } from 'react-router-dom';
import Blank from './Components/Blank';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ContentCutIcon from '@mui/icons-material/ContentCut';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from "axios";

function App() {
  const { collapseSidebar } = useProSidebar();
  const [userName, setUserName] = useState("Fargol");
  let access_token =localStorage.getItem('acctoken');
  
  useEffect(() => {
    console.log(access_token);
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
    <BrowserRouter>
      <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
        <Sidebar backgroundColor="#261B39"  style={{ height: "100vh" }} >
          <Menu rootStyles={{color: "#fecbca"}} >
            
          </Menu>
        </Sidebar>
        <Routes>
          <Route path="/" element={<Blank />} />
        </Routes>
        {/* <main>
          <h1 style={{ color: "#261B39", marginLeft: "5rem" }}>
            React-Pro-Sidebar
          </h1>
        </main> */}
      </div>
    </BrowserRouter>
  );
}

export default App;