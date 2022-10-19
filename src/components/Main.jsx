import React, {useState, useEffect} from "react";
import {Navbar} from './';
import LoginPage from "./LoginPage";
import { attemptLogin, registerUser } from "../api";
import Posts from "./Posts";



const Main = () => {
  const [finalUsername, setFinalUser] = useState('')
  const [finalPass, setFinalPass] = useState('')
  const [token, setToken] = useState('')
  const [userData, setUserData] = useState({})

  
  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
    registerUser(finalUsername, finalPass, setToken)
  }, [finalPass]);
  
    
  
  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
    attemptLogin(token, setUserData)
  }, [token]);

  // console.log(userData);

  return (
    <div id="main">
    <Navbar/>
    <LoginPage setFinalUser={setFinalUser} finalUsername={finalUsername} setFinalPass={setFinalPass} />
    <Posts />
  </div>
  );
};

export default Main;
