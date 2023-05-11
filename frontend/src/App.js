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

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/LoginBarber" Component={LoginBarber}/>
        <Route path="/SignUpBarber" Component={SignUpBarber} />
        <Route path="/LoginCustomer" Component={LoginCustomer}/>
        <Route path="/SignUpCustomer" Component={SignUpCustomer} />
        <Route path="/SalonSelect" element={<div className="flex flex-row"><Sidebar/> <SalonSelect/></div>}/>
        <Route path="/SalonPage/:id" element={ <ImageSlider slides={SliderData} />} />
        <Route path="/ProfilePage" element={<div className="flex flex-row"><Sidebar/> <ProfilePage/></div>} />
      </Routes>
    </Router>
    </div>
    
  );
  }





export default App;