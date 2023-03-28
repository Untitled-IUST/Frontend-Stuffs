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

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' Component={ChangePages} exact/>
        <Route path='/SignUpCustomer' Component={SignUpCustomer}/>
        <Route path='/LoginCustomer' Component={LoginCustomer} />
        <Route path='/SignUpBarber' Component={SignUpBarber}/>
        <Route path='/LoginBarber' Component={LoginBarber} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;