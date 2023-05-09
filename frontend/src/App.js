import SignUpCustomer from './pages/SignUpCustomer';
import LoginCustomer from './pages/LoginCustomer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";
import SignUpBarber from './pages/SignUpBarber';
import LoginBarber from './pages/LoginBarber'
import ChangePages from './pages/changePages'
import ImageSlider from './pages/ImageSlider';
import { SliderData } from './pages/SliderData';
import CashWithdrawal from './pages/Wallet';
import SelectedPlan from './pages/Content';
import { dList } from './pages/DList';

function App() {
return (
    <div className="App">
      <Router>
          <Routes>
          <Route path="/images" element={<ImageSlider slides={SliderData} />} />
          <Route path="/wallet" element={<CashWithdrawal dList={dList} />} /> 
          <Route path="/payment"  Component={SelectedPlan} />
          
          
          </Routes>
      </Router>

  
    </div>
    
  );
  }





export default App;