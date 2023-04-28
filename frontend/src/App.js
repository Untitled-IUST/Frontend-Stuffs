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
import ImageSlider from './pages/ImageSlider';
import { SliderData } from './pages/SliderData';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/LoginBarber" Component={LoginBarber} />
        <Route path="/SignUpBarber" Component={SignUpBarber} />
        <Route path="/LoginCustomer" Component={LoginCustomer} />
        <Route path="/SignUpCustomer" Component={SignUpCustomer} />
        <Route path="/SalonSelect" Component={SalonSelect} />
        <Route path="/images" element={<ImageSlider slides={SliderData} />} />
      </Routes>
    </Router>
    </div>
    
  );
  }





export default App;