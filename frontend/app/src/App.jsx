import { useState } from "react";
import reactLogo from "./assets/react.svg";
import bg from "./assets/back.svg";
import bg_1 from "./assets/back_2.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Card from "./components/Card";

function App() {
  let notas = ["Nota-1", "Nota-2"]
  return (
    <>
      <div className="main-app">
        {notas.map((nota,index) => {
         return <Card note={index} />;
          console.log(nota);
        })}
      </div>
    </>
  );
}

export default App;
