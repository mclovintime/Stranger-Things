import React, {useState, useEffect} from "react"
import { sendMessage } from "../api"

    // description, title, location, price, author, createdAt, updatedAt
    


const SinglePost = (thePost, newPostId) =>    {

    const [message, setMessage] = useState("")
    console.log(thePost)

    function handleSubmit() {
        if (message !== "") {
            console.log("message is ok")
            console.log(thePost.title, "is post id")
            sendMessage(message, thePost.title)

        // submission is working properly, now just to create a function in API that will recieve message along with the ID of the post.
        }
    }




  

    return(
        <div>
            <div>{thePost.location}</div>
            <div>{thePost.description}</div>
            <div>{`Location: ${thePost.price}`}</div>
            <div>{`Price: ${thePost.author}`}</div>
            <div>{`Author: ${thePost.createdAt.username}`}</div>
            <div>{`Created: ${thePost.updatedAt}`}</div>
            
            

            {/* also place inputs to send a message to the poster here*/}

            <div id="messageform">
                <label>Send a message: </label>
                <input id="messagebody" type="text" onChange={(event) => setMessage(event.target.value)}/>
            
            </div>
                <button onClick={() => handleSubmit()}>Submit</button>
        </div>
    )
}

export default SinglePost