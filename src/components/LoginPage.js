import React, {useState} from 'react'
import Main from './Main';

const LoginPage = ({setFinalUser, setFinalPass}) =>   {
    
const [username, setName] = useState('');
const [password, setPassword] = useState('');

function submitInfo() {
   setFinalUser(username)
   setFinalPass(password)
}

    return  (
        <div id="loginform">

            <p>TESTING</p>
            <label>
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
    )
    
};



export default LoginPage