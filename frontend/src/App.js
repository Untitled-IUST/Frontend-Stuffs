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

  return (
    <UserProfileContext.Provider value={{ hasEditedProfile, setHasEditedProfile }}>
      <div>
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
              <ImageSlider slides={SliderData}/>
            } />
            <Route path="/ProfilePage" Component={ProfilePage} />
            <Route path="/wallet" Component={CashWithdrawal} />
            <Route path="/payment" Component={Receipt} />
            <Route path="/ShoppingCart" element ={
              <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
                <SideBar/>
                <PaymentMethods/>
              </div>
            } />
            <Route path="/paymentcard"  Component={SelectedPlan} />
          </Routes>
        </Router>
      </div>
    </UserProfileContext.Provider>
  );
}

export default App;