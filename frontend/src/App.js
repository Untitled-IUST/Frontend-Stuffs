import SignUpCustomer from './pages/LoginSignup/SignUpCustomer';
import LoginCustomer from './pages/LoginSignup/LoginCustomer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";
import SignUpBarber from './pages/LoginSignup/SignUpBarber';
import LoginBarber from './pages/LoginSignup/LoginBarber'
import ChangePages from './pages/LoginSignup/changePages'
import SalonSelect from './pages/salonSelect/salonSelect';

function App() {
  return (
    // <div className="App">
    // <Router>
    //   <Routes>
    //     <Route path='/' Component={ChangePages} exact/>
    //     <Route path='/SignUpCustomer' Component={SignUpCustomer}/>
    //     <Route path='/LoginCustomer' Component={LoginCustomer} />
    //     <Route path='/SignUpBarber' Component={SignUpBarber}/>
    //     <Route path='/LoginBarber' Component={LoginBarber} />
    //   </Routes>
    // </Router>
    // </div>
    <SalonSelect/>
  );
}

export default App;