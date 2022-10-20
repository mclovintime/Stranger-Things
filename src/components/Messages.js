import React, {useEffect, useState} from 'react'
import { getMessages } from '../api'
// import { displayMessages } from '../api'

const Messages = ({token}) =>    {
const [messages, setMessages] = useState("nomessages")
getMessages(token, setMessages)

    return(
        <p>messages test</p>
    )

}


export default Messages