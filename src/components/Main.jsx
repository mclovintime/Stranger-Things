import React, {useState} from "react";
import {Navbar} from './';
import LoginPage from "./LoginPage";
import { attemptLogin, registerUser } from "../api";



const Main = () => {
  const [finalUsername, setFinalUser] = useState('')
  const [finalPass, setFinalPass] = useState('')
  const [token, setToken] = useState('')

  

  if (finalPass.length){
    registerUser(finalUsername, finalPass, setToken)
  }
  // if (token.length){
    attemptLogin(token)
    
  // }
  console.log(token);
  
  return (
    <div id="main">
    <Navbar/>
    <LoginPage setFinalUser={setFinalUser} finalUsername={finalUsername} setFinalPass={setFinalPass} />
  </div>
  );
};

export default Main;
