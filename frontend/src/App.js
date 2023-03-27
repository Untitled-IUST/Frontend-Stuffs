import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Login} exact/>
        <Route path='/SignUp' Component={SignUp}/>
      </Routes>
    </Router>
  );
}

export default App;
