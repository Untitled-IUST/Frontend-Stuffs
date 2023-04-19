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

function App() {
  return (
    <div className="App">
      <ImageSlider slides={SliderData} />;
      {/* <Routes>
          <Route exact path="/ehsanpage/ImageSlider/:id" element={<ImageSlider slides={SliderData} />}/>
    </Routes> */}
    </div>
    
  );
  }





export default App;