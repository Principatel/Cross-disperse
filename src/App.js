import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Landingpage from "./Components/pages/Landingpage";
import Maindashboard from "./Components/Dashboardpages/Maindashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/maindashboard" element={<Maindashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
