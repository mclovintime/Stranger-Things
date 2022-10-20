import { Main } from "../components";

const BASE = 'https://strangers-things.herokuapp.com'


export async function registerUser(finalUserName, finalPass, setToken, setLoginMessage)    {
    
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
    if(result.data != null) {
    setToken(result.data.token)
    
     setLoginMessage("Thank you for registering!")
    
  }

  })
  .catch(console.error);

}

//

export async function loginUser(finalUserName, finalPass, setLoginToken, setLoginMessage)  {



fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/users/login', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: `${finalUserName}`,
      password: `${finalPass}`
    }
  })
}).then(response => response.json())
  .then(result => {
    if(result.data != null)  {
      
    setLoginToken(result.data.token)
    setLoginMessage(result.data.message)
  }
  })
  .catch(console.error);
}

//

export async function attemptLogin(loginToken, setUserData)   {
  fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/users/me', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${loginToken}` 
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


export async function getMessages(token, setMessages)   {

  if (token){
    console.log(token, "line 96 token")
    fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/me', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }).then(response => response.json())
      .then(result => {
        console.log(token, "is token passed to function")
        console.log(result);
      })
      .catch(console.error);
  }

  
  
}