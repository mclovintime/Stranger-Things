import React, {useEffect, useState} from 'react'
import { getMessages } from '../api'
// import { displayMessages } from '../api'

const Messages = ({loginToken}) =>    {

    console.log(loginToken, "is login token from messages js")

const [messages, setMessages] = useState("nomessages")

console.log(loginToken, 'is token in messages')
getMessages(loginToken, setMessages)

    return(
        <p>messages test</p>
    )

}


export default Messages