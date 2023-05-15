import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

import LoginCustomer from "./pages/LoginSignup/LoginCustomer";
import SignUpCustomer from "./pages/LoginSignup/SignUpCustomer";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" Component={LoginCustomer}/>
        <Route path="/SignUpCustomer" Component={SignUpCustomer} />
        {/* <Route path="/SalonSelect" element={
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
        <Route path="Profile" element ={
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