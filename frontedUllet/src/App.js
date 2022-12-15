import React, { useState } from "react";
import Button from "./components/forms/Button";
import "./assets/global.css";
import Login from "./components/Login";

export default function App() {
  const [contador, setcontador] = useState(0);

  function incrementar() {
    setcontador(contador + 1);
    console.log(contador);
  }

  function reiniciar() {
    setcontador(0);
  }

  return (
    <div>
      <Login></Login>
      <p>Contador:{contador}</p>
      <Button onClick={incrementar}>Incrementar</Button>
      <Button onClick={reiniciar}>Reiniciar</Button>
    </div>
  );
}
