import { useState } from "react";
import reactLogo from "./assets/react.svg";
import bg from "./assets/back.svg";
import bg_1 from "./assets/back_2.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  function handleClick(e) {
    if (e.target === "button") {
      console.log(e.target);
    }
  }
  return (
    <>
      <div className="main-app">
        <Login />
      </div>
    </>
  );
}

export default App;
