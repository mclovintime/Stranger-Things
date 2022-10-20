import React, {useState, useEffect} from "react";
import {Navbar} from './';
import LoginPage from "./LoginPage";
import { attemptLogin, registerUser } from "../api";
import Posts from "./Posts";
import Messages from "./Messages";

import {
  RouterProvider,
  Route,
  Link,
  Switch,
  createBrowserRouter,
  createRoutesFromElements,

} from 'react-router-dom';

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
  
    const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Navbar/>}>
      <Route path="login" element={<LoginPage setFinalUser={setFinalUser} finalUsername={finalUsername} setFinalPass={setFinalPass} />}>
      
    </Route>
    <Route path="/posts" element={<Posts />}>
      
    </Route>
    <Route path="messages" element={<Messages token={token}/>}>
      
    </Route>
      <Route index element={<Posts />}>
        
      </Route>
    </Route>
    )
    )
  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
    attemptLogin(token, setUserData)
  }, [token]);

  // console.log(userData);

  return (
    <main>  
      <div id="main">
        <RouterProvider router={router}/>
        
          
      </div>
  
  </main>
  );
};

export default Main;
