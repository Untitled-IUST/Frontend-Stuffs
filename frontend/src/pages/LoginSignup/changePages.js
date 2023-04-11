import { Button } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";

function ChangePages()
{
  return(
    <div>
      <button><Link to="/LoginBarber">Barber</Link></button>
      <button><Link to="/LoginCustomer">Customer</Link></button>
    </div>
  )
}

export default ChangePages;