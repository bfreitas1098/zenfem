import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import CurrentProfile from "./pages/CurrentProfile";
import OtherProfile1 from "./pages/OtherProfile1";
import OtherProfile2 from "./pages/OtherProfile2";
import OtherProfile3 from "./pages/OtherProfile3";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<HomePage />}></Route>
          <Route path="/CurrentProfile" element={<CurrentProfile />}></Route>
          <Route path="/OtherProfile1" element={<OtherProfile1 />}></Route>
          <Route path="/OtherProfile2" element={<OtherProfile2 />}></Route>
          <Route path="/OtherProfile3" element={<OtherProfile3 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
