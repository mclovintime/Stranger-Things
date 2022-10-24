import React, { useState } from "react";
import Main from "./Main";
import "./loginpage.css";
import { tryLogin } from "./Main";
import { loginUser } from "../api";
import { registerUser } from "../api";

const LoginPage = ({
  loginMessage,
  setFinalUser,
  finalUsername,
  setFinalPass,
  finalPass,
  setLoginToken,
  setLoginMessage,
  loginToken,
  setToken,
}) => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  async function tryRegister() {
    if (loginToken == "") {
      registerUser(username, password, setToken, setLoginMessage);
    }
  }

  async function submitLogin() {
    loginUser(username, password, setLoginToken, setLoginMessage);
  }

  async function submitRegister() {
    setFinalUser(username);
    setFinalPass(password);

    tryRegister();
  }

  return (
    <div id="wholepage">
      <p>{loginMessage}</p>
      <div id="loginform">
        <p id="logintag">Login or register below</p>
        <label id="prompt">Please enter username:</label>
        <br />
        <input
          type="text"
          required
          value={username}
          onChange={(event) => setName(event.target.value)}
        />

        <label>
          <br />
          Please enter password:
        </label>
        <br />
        <input
          type="text"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button onClick={() => submitLogin()}>Login</button>
        <button onClick={() => submitRegister()}>Register</button>
      </div>
    </div>
  );
};

export default LoginPage;
