import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

import LoginBarber from "./pages/LoginSignup/LoginBarber";
import SignUpBarber from "./pages/LoginSignup/SignUpBarber"
import LoginCustomer from "./pages/LoginSignup/LoginCustomer";
import SignUpCustomer from "./pages/LoginSignup/SignUpCustomer";
import SalonSelect from './pages/salonSelect/salonSelect';
import ImageSlider from './pages/salonPage/ImageSlider';
import { SliderData } from './components/SliderData';
import Sidebar from "./components/sideBarCustomer";
import { ProSidebarProvider } from "react-pro-sidebar";
import ProfilePage from "./pages/customerProfile/Customer_Profile";
import PaymentMethods from "./pages/ShoppingCart/shoppingcart.jsx"

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/LoginBarber" Component={LoginBarber}/>
        <Route path="/SignUpBarber" Component={SignUpBarber} />
        <Route path="/LoginCustomer" element={<div className="flex flex-row"><Sidebar/> <LoginCustomer/></div>} />
        <Route path="/SignUpCustomer" element={<div className="flex flex-row"><Sidebar/> <SignUpCustomer/></div>} />
        <Route path="/SalonSelect" element={<div className="flex flex-row"><Sidebar/> <SalonSelect/></div>}/>
        <Route path="/SalonPage/:id" element={ <ImageSlider slides={SliderData} />} />
        <Route path="/ProfilePage" element={<div className="flex flex-row"><Sidebar/> <ProfilePage/></div>} />
        <Route path="/ShoppingCart" Component={PaymentMethods}/>
      </Routes>
    </Router>
    </div>
    
  );
  }





export default App;