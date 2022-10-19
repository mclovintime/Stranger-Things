import React, {useEffect, useState} from 'react'
import { displayPosts } from '../api'
import './posts.css'

const Posts = ({}) =>   {

    
    const [returnedPosts, setReturnedPosts] = useState("empty")
    

    useEffect(() => {
        displayPosts(setReturnedPosts)
    }, [])

    useEffect(() => {
        console.log(returnedPosts)
        if (returnedPosts != "empty")   {
            console.log(returnedPosts.data.posts)
        }
        
    }, [returnedPosts])
    
    

if (returnedPosts != "empty")   {
return (
<div>


{returnedPosts.data.posts.map(({description, title, location, price, author}) => (
    <div>
        <p id="title">{title}</p>
        <p id="location">{location}</p>
        <p id="description">{description}</p>
        <p id="price">{`Price: ${price}`}</p>
        <p id="author">{`Author: ${author.username}`}</p>
    </div>

))}





</div>
)
}


}

export default Posts