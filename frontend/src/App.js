import{BrowserRouter as Router}from 'react-router-dom';
import {
  Routes,
  Route,
}from "react-router-dom";
import LoginBarber from "./pages/LoginSignup/LoginBarber";
import SignUpBarber from "./pages/LoginSignup/SignUpBarber"
import LoginCustomer from "./pages/LoginSignup/LoginCustomer";
import SignUpCustomer from "./pages/LoginSignup/SignUpCustomer";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/LoginBarber" Component={LoginBarber} />
        <Route path="/SignUpBarber" Component={SignUpBarber} />
        <Route path="/LoginCustomer" Component={LoginCustomer} />
        <Route path="/SignUpCustomer" Component={SignUpCustomer} />
      </Routes>
    </div>
    
  );
}

export default App;