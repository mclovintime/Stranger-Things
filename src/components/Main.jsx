import React, {useState, useEffect} from "react";
import {Navbar} from './';
import LoginPage from "./LoginPage";
import { attemptLogin, registerUser } from "../api";
import Posts from "./Posts";
import Messages from "./Messages";
import { getMessagesTest } from "../api";
import AddPost from "./AddPost";
import SinglePost from "./SinglePost";



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
  const [loginToken, setLoginToken] = useState('')
  const [loginMessage, setLoginMessage] = useState('')

  const [Hdescription, setSdescription] = useState("")
  const [Htitle, setHtitle] = useState("")
  const [Hlocation, setHlocation] = useState("")
  const [Hprice, setHprice] = useState("")
  const [Hauthor, setauthor] = useState("")
  const [HcreatedAt, setHcreatedAt] = useState("")
  const [HupdatedAt, setHupdatedAt] = useState("")
  const [Hid, setHid] = useState("")

  
// getMessagesTest()
  
  
  
    const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Navbar/>}>
      <Route path="login" element={<LoginPage 
      loginMessage={loginMessage} 
      setFinalUser={setFinalUser} 
      finalUsername={finalUsername} 
      setFinalPass={setFinalPass}  
      finalPass={finalPass} 
      setLoginToken={setLoginToken} 
      setLoginMessage={setLoginMessage}
      loginToken={loginToken}
      setToken={setToken}/>}>
    </Route> 

    <Route path="/posts" element={<Posts 
    setSdescription={setSdescription}
    setHtitle={setHtitle}
    setHlocation={setHlocation}
    setHprice={setHprice}
    setauthor={setauthor}
    setHcreatedAt={setHcreatedAt}
    setHupdatedAt={setHupdatedAt}
    setHid={setHid}
    
    />}>
    </Route>
    <Route path="/singlepost" element={<SinglePost 
    description={Hdescription}
    title={Htitle}
    location={Hlocation}
    price={Hprice}
    author={Hauthor}
    createdAt={HcreatedAt}
    updatedAt={HupdatedAt}
    id={Hid}
    />}>
    </Route>

    <Route path="/addpost" element={<AddPost />}>
    </Route>

    <Route path="messages" element={<Messages loginToken={loginToken}/>}>
    </Route>

      <Route index element={<Posts />}>

      </Route>
    </Route>
    )
    )
  // useEffect(() => {
  //   //Runs on the first render
  //   //And any time any dependency value changes
  //   attemptLogin(token, setUserData)
  // }, [token]);

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
