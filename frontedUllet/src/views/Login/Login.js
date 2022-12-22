import React, { useState } from "react";
import Input from "../../components/forms/Input";
import Button from "../../components/forms/Button";
import Logo from "../../assets/Logo"



import "./Login.css"

export default function Login() {
  async function onSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/login", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        user,
        password,
      },
    });
    const jsonres = await res.json();
    alert(jsonres.message);
  }

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <section className="login">
        <Logo renderText={false} size="40px"/>
        <p className="title">Iniciar Sesion en <b>Ullet</b></p>
        <form onSubmit={onSubmit} className="flex card form">
          <Input onChange={(v) => setUser(v.target.value)}><b>Nombre de Usuario</b></Input>
          <Input type="password" onChange={(v) => setPassword(v.target.value)}><b>Contraseña</b></Input>
          <Button type="submit"><b>INGRESAR</b></Button>
        </form>
      </section>
    </div>
  );
}
