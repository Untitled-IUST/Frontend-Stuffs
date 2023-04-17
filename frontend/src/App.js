import SignUpCustomer from './pages/SignUpCustomer';
import LoginCustomer from './pages/LoginCustomer';
import ProfilePage from './pages/Customer_Profile';
// import { Link } from "react-router-dom";
// import { idCheck } from './contextAll';
import { useContext , createContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";
import SignUpBarber from './pages/SignUpBarber';
import LoginBarber from './pages/LoginBarber'
import ChangePages from './pages/changePages'


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' Component={ProfilePage} exact/>
        {/* <Route path='/SignUpCustomer' Component={SignUpCustomer}/>
        <Route path='/LoginCustomer' Component={LoginCustomer} />
        <Route path='/SignUpBarber' Component={SignUpBarber}/>
        <Route path='/LoginBarber' Component={LoginBarber} />
        <Route path='/Customer_Profile' Component={ProfilePage} />  */} 
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;