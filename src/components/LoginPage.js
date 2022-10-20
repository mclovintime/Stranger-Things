import React, {useState} from 'react'
import Main from './Main';
import './loginpage.css'
import { tryLogins } from './Main';
import { loginUser } from "../api";
import { registerUser } from '../api';

const LoginPage = ({loginMessage, setFinalUser,finalUsername, setFinalPass, finalPass, setLoginToken, setLoginMessage, loginToken, setToken}) =>   {
    
const [username, setName] = useState('');
const [password, setPassword] = useState('');

async function tryLogins() {
    loginUser(finalUsername, finalPass, setLoginToken, setLoginMessage)
    if (loginToken == "") {
    registerUser(finalUsername, finalPass, setToken, setLoginMessage)
  }
  }

function submitInfo() {
   setFinalUser(username)
   setFinalPass(password)
   tryLogins()
}


    return  (
        <div id="wholepage">
            <p>{loginMessage}</p>
        <div id="loginform">

            <p id="logintag">Login or register below</p>
            <label id="prompt">
                Please enter username:
            </label><br/>
            <input type="text" 
            required value={username} 
            onChange={(event) => setName(event.target.value)}/>

<label><br/>
                Please enter password:
            </label><br/>
            <input type="text" 
            required value={password} 
            onChange={(event) => setPassword(event.target.value)}/>
                <br/>
            <button onClick={() => submitInfo()}>Submit</button>
        </div>
        </div>
    )
    
};



export default LoginPage