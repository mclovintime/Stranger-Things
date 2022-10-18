import { Main } from "../components";

const BASE = 'https://strangers-things.herokuapp.com'


export async function registerUser(finalUserName, finalPass, setToken)    {
    
    
    fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/users/register', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: finalUserName,
      password: finalPass
    }
  })
}).then(response => response.json())
  .then(result => {
    setToken(result.data.token)
    
    
  })
  .catch(console.error);

}

export async function attemptLogin(token)   {

}