import React, {useEffect, useState} from 'react'
import { getMessages } from '../api'
// import { displayMessages } from '../api'
import { getMessagesTest } from '../api'

const Messages = ({loginToken}) =>    {


const [messages, setMessages] = useState("nomessages")





useEffect(() =>     {
async function fetchMessages()  {
    const localToken = localStorage.getItem("userToken")
    

    await getMessages(setMessages, localToken)
    console.log(messages)
}
fetchMessages()

}, [])

    return(
        <div>
            <p>messages test, nothing to display from returned obj</p>
            {/* <p>{messages.data.posts}</p> */}
        </div>
    )

}


export default Messages