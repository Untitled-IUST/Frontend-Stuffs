import SignUpCustomer from './pages/SignUpCustomer';
import LoginCustomer from './pages/LoginCustomer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' Component={LoginCustomer} exact/>
        <Route path='/SignUp' Component={SignUpCustomer}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;