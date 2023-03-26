import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
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
        <Route path='/' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
