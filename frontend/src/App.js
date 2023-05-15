import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

import LoginCustomer from "./pages/LoginSignup/LoginCustomer";
import SignUpCustomer from "./pages/LoginSignup/SignUpCustomer";
import SalonSelect from "./pages/SalonSelect/salonSelect";
import SideBar from "./Components/SideBar/SideBar";
import ImageSlider from "./pages/SalonPage/ImageSlider";
import { SliderData }  from "./Components/SliderData";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" Component={LoginCustomer}/>
        <Route path="/SignUpCustomer" Component={SignUpCustomer} />
        <Route path="/SalonSelect" element={
          <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
            <SideBar/>
            <SalonSelect/>
          </div>
        }/>
        <Route path="/SalonPage/:id" element ={
          <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
            <SideBar/>
            <ImageSlider slides={SliderData}/>
          </div>
        } />
        {/* <Route path="Profile" element ={
          <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
            <SideBar/>
            <ProfilePage/>
          </div>
        }/> */}
      </Routes>
    </Router>
    </div>
    
  );
  }





export default App;