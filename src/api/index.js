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
    if(result.data != null)
    setToken(result.data.token)
    

  })
  .catch(console.error);

}

export async function attemptLogin(token, setUserData)   {
  fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/users/me', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}` 
  },
}).then(response => response.json())
  .then(result => {
    
    setUserData(result)

  })
  .catch(console.error);

}

// export async function (setToken) {
//   setToken('')
  
// }

export async function displayPosts(setReturnedPosts)    {
    fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts', {
        
      }).then(response => response.json())
        .then(result => {
          //console.log(result, "is posts");
          setReturnedPosts(result)
      
        })
        .catch(console.error);
      
      }
