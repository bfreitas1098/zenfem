import "./App.css";
import React from "react";
import Login from "./pages/Login";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="App">
      <h1>ZenFem</h1>
      <Login />
      <HomePage />
    </div>
  );
}

export default App;
