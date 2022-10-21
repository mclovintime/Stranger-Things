import React, {useEffect, useState} from 'react'
import { displayPosts } from '../api'
import './posts.css'
import { Outlet, Link } from 'react-router-dom'
import { Hsetting } from './SinglePost'

const Posts = ({}) =>   {

    
    const [returnedPosts, setReturnedPosts] = useState("empty")
    

    useEffect(() => {
        displayPosts(setReturnedPosts)
    }, [])

    useEffect(() => {
        // console.log(returnedPosts)
        if (returnedPosts != "empty")   {
            // console.log(returnedPosts.data.posts)
        }
        
    }, [returnedPosts])
    
    async function postClicked(description, title, location, price, author, createdAt, updatedAt){
        
        console.log(title)
        
    }

if (returnedPosts != "empty")   {
return (
<div>

<h1 id="header">Posts</h1>
<Link to ="/addpost">
<h3 id="addPost">(add post)</h3>
</Link>

{returnedPosts.data.posts.map(({description, title, location, price, author, createdAt, updatedAt}) => (
    
    <Link onClick={() => postClicked(description, title, location, price, author, createdAt, updatedAt)} to ="/singlepost">
    <div  class="userPosts">
        <p id="title">{title}</p>
        <p id="location">{location}</p>
        <p id="description">{description}</p>
        <p id="price">{`Price: ${price}`}</p>
        <p id="author">{`Author: ${author.username}`}</p>
    </div>
    </Link>
   

))}





</div>
)
}


}

export default Posts