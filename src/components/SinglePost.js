import React, { useState, useEffect } from "react";
import { sendMessage } from "../api";

// description, title, location, price, author, createdAt, updatedAt

const SinglePost = (thePost, newPostId) => {
  const currentUser = localStorage.getItem("username");

  const [message, setMessage] = useState("");
  // console.log(thePost)

  function handleSubmit() {
    if (message !== "") {
      sendMessage(message, thePost.title, thePost.createdAt.username);
    }
  }

  return (
    <div>
      <div>{thePost.location}</div>
      <div>{thePost.description}</div>
      <div>{`Location: ${thePost.price}`}</div>
      <div>{`Price: ${thePost.author}`}</div>
      <div>{`Author: ${thePost.createdAt.username}`}</div>
      <div>{`Created: ${thePost.updatedAt}`}</div>

      {/* also place inputs to send a message to the poster here*/}

      {thePost.author !== currentUser ? (
        <div>
          <div id="messageform">
            <label>Send a message: </label>
            <input
              id="messagebody"
              type="text"
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
      ) : (
        <div>AAAAAAAA</div>
      )}
    </div>
  );
};

export default SinglePost;
