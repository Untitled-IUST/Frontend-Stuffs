import { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import axios from "axios";
import {Link} from 'react-router-dom';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddHomeIcon from '@mui/icons-material/AddHome';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import HistoryIcon from '@mui/icons-material/History';

function SideBar(){
  
  const { collapseSidebar } = useProSidebar();
  const [userName, setUserName] = useState("");
  let access_token =localStorage.getItem('accessTokenCustomer');

  useEffect(() => {
    // console.log(access_token);
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
        <Sidebar backgroundColor="#EEE2DC">
          <Menu rootStyles={{color: "#AC3B61"}} >
            <MenuItem icon={<MenuOutlinedIcon />} onClick={() => { collapseSidebar(); }} style={{ textAlign: "center" }} >
              {" "}
              <h2 className="text-xl">{userName}</h2>
            </MenuItem>
            <MenuItem icon={<AddHomeIcon/>} component={<Link to="/SalonSelect" />}>Salons</MenuItem>
            <MenuItem icon={<AccountBoxRoundedIcon />}  component={<Link to="/ProfilePage" />}>Profile</MenuItem>
            <MenuItem icon={<ShoppingCartCheckoutIcon/>}  component={<Link to="/ShoppingCart" />}>Basket</MenuItem>
            <MenuItem icon={<AccountBalanceWalletIcon/>}  component={<Link to="/wallet" />}>Wallet</MenuItem>
            <MenuItem icon={<HistoryIcon/>}  component={<Link to="/OrderHistory" />}>Service History</MenuItem>
            <MenuItem icon={<LogoutIcon />} onClick={() => {localStorage.removeItem('accessTokenCustomer')}} component={<Link to="/" />}>Log Out</MenuItem>
            
          </Menu>
        </Sidebar>
    )

}
export default SideBar;