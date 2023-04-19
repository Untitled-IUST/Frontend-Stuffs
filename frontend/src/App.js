import SignUpCustomer from './pages/SignUpCustomer';
import LoginCustomer from './pages/LoginCustomer';
import ProfilePage from './pages/Customer_Profile';
// import { Link } from "react-router-dom";
// import { idCheck } from './contextAll';
import { useContext , createContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom";
import SignUpBarber from './pages/SignUpBarber';
import LoginBarber from './pages/LoginBarber'
import ChangePages from './pages/changePages'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={ChangePages} exact/>
        <Route path='/SignUpCustomer' Component={SignUpCustomer}/>
        <Route path='/LoginCustomer' Component={LoginCustomer} />
        <Route path='/SignUpBarber' Component={SignUpBarber}/>
        <Route path='/LoginBarber' Component={LoginBarber} />
        <Route path='/ProfilePage' Component={ProfilePage} />  
      </Routes>
      </BrowserRouter>

    </div>
    
  );
}

export default App;