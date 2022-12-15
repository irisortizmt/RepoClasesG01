import React, { useState } from "react";

import Card from "./Card";
import Gap from "./Gap";
import Input from "./forms/Input";
import Button from "./forms/Button";
import { type } from "@testing-library/user-event/dist/type";

export default function Login() {
  async function onSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/login", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application.json",
        user,
        password,
      },
    });
    alert(res.message);
  }

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Card padding="2rem" flexDirection="column" borderRadius="0.5rem">
          <h1>Login</h1>
          <Gap>2rem</Gap>
          <Input onChange={(v) => setUser(v.target.value)}>User Name</Input>
          <Gap>0.5rem</Gap>
          <Input type="password" onChange={(v) => setPassword(v.target.value)}>
            Contraseña
          </Input>
          <Gap>2rem</Gap>
          <Button type="submit">
            <b>INGRESAR</b>
          </Button>
        </Card>
      </form>
    </div>
  );
}
