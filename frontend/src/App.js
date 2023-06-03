import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import { useState } from "react";
import LoginCustomer from "./pages/LoginSignup/LoginCustomer";
import SignUpCustomer from "./pages/LoginSignup/SignUpCustomer";
import SalonSelect from "./pages/SalonSelect/salonSelect";
import SideBar from "./Components/SideBar/SideBar";
import ImageSlider from "./pages/SalonPage/ImageSlider";
import { SliderData }  from "./Components/SliderData";
import ProfilePage from "./pages/customerProfile/Customer_Profile";
import CashWithdrawal from "./pages/Wallet/Wallet";
import { Receipt } from "./pages/Wallet/Receipt";
import PaymentMethods from "./pages/ShoppingCart/shoppingcart";
import SelectedPlan from "./pages/Wallet/Content";
import CommentExampleReplyFormOuter from "./pages/SalonPage/Comments";
import UserProfileContext from "./pages/SalonPage/UserProfileContext";

const App = () => {
  const [hasEditedProfile, setHasEditedProfile] = useState(false);
import OrderHistory from "./pages/orderhistory/orderhistory"

  return (
    <UserProfileContext.Provider value={{ hasEditedProfile, setHasEditedProfile }}>

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
          <Route path="/ProfilePage" element ={
            <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
              <SideBar/>
              <ProfilePage/>
            </div>
          } />
          <Route path="/wallet" element ={
            <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
              <SideBar/>
              <CashWithdrawal/>
            </div>
          } />
          {/* <Route path="/payment" element ={
            <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
              <SideBar/>
              <Receipt/>
            </div>
          } /> */}
          <Route path="/payment" Component={Receipt} />
          <Route path="/ShoppingCart" element ={
            <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
              <SideBar/>
              <PaymentMethods/>
            </div>
          } />
          <Route path="/paymentcard"  Component={SelectedPlan} />
          <Route path="/orderhistory" Component={OrderHistory}/>
        </Routes>
      </Router>
      </div>
    </UserProfileContext.Provider>
    
  );
}

export default App;