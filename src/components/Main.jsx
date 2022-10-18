import React, {useState} from "react";
import {Navbar} from './';
import LoginPage from "./LoginPage";



const Main = () => {
  const [finalUsername, setFinalUser] = useState('')
  const [finalPass, setFinalPass] = useState('')

  console.log(finalUsername, finalPass)
  return (
    <div id="main">
    <Navbar/>
    <LoginPage setFinalUser={setFinalUser} finalUsername={finalUsername} setFinalPass={setFinalPass} />
  </div>
  );
};

export default Main;
