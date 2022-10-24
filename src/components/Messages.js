import React, { useEffect, useState } from "react";
import { getMessages } from "../api";
// import { displayMessages } from '../api'
import { getMessagesTest } from "../api";
import "./singleMessage.css";

const Messages = ({}) => {
  const localUser = localStorage.getItem("username");

  const [messages, setMessages] = useState("nomessages");

  let placeholder = [];

  useEffect(() => {
    async function fetchMessages() {
      const localToken = localStorage.getItem("userToken");

      await getMessages(setMessages, localToken);

      placeholder = messages.data.nessages;
    }
    fetchMessages();
  }, []);

  if (messages != "nomessages") {
    return (
      <div>
        {messages.data.messages.map(({ content, fromUser, post }) => (
          <div id="singleMessage">
            <p id="title">{post.title}</p>
            <p>{fromUser.username}</p>
            <p>
              {"'"}
              {content}
              {"'"}
            </p>
          </div>
        ))}
      </div>
    );
  }
};

export default Messages;
