import { Main } from "../components";

const BASE = 'https://strangers-things.herokuapp.com'


export async function registerUser(finalUserName, finalPass, setToken, setLoginMessage)    {
    
    fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/register', {
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

export async function loginUser(trueUser, truePassword, setLoginToken, setLoginMessage)  {



fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/login', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: `${trueUser}`,
      password: `${truePassword}`
    }
  })
}).then(response => response.json())
  .then(result => {
    if(result.data != null)  {
      
    // setLoginToken(result.data.token)
    setLoginMessage(result.data.message)
    localStorage.setItem("userToken", result.data.token)
  }
  })
  .catch(console.error);
}

//

export async function attemptLogin(loginToken, setUserData)   {
  fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/me', {
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
          // console.log(result, "is posts");
          setReturnedPosts(result)
      
        })
        .catch(console.error);
      
      }


export async function getMessages(setMessages, localToken)   {

  console.log(localToken)
  
const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/me', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localToken}`
    },
  })

const newResponse = await response.json()
console.log(newResponse)
setMessages(newResponse)
}

export async function submitPostFunc(title, description, price, willDeliver)  {
  const localToken = localStorage.getItem("userToken")

  fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localToken}`
  },
  body: JSON.stringify({
    post: {
      title: title,
      description: description,
      price: price,
      willDeliver: willDeliver
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}

export async function sendMessage(message, postId){
  const localToken = localStorage.getItem("userToken")
  console.log(localToken, "is the supplied token")

  fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts/${postId}/messages`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localToken}`
  },
  body: JSON.stringify({
    message: {
      content: message
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}