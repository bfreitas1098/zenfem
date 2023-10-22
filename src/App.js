import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
