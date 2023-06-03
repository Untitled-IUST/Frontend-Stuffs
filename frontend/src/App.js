import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Landing} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
