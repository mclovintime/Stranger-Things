import React, {useState} from 'react'
import Main from './Main';
import './loginpage.css'

const LoginPage = ({setFinalUser, setFinalPass}) =>   {
    
const [username, setName] = useState('');
const [password, setPassword] = useState('');

function submitInfo() {
   setFinalUser(username)
   setFinalPass(password)
}

    return  (
        <div id="wholepage">
        <div id="loginform">

            <p>Login or register below</p>
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