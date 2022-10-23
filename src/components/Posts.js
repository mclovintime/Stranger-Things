import React, {useEffect, useState} from 'react'
import { displayPosts } from '../api'
import './posts.css'
import { Outlet, Link } from 'react-router-dom'
import { Hsetting } from './SinglePost'

const Posts = ({setSdescription, setHtitle, setHlocation, setHprice, setauthor, setHcreatedAt, setHupdatedAt}) =>   {
    //for single post .. moved this to main so I can pass it down to posts (here), 
    //then to single post

    // const [Sdescription, setSdescription] = useState("")
    // const [Htitle, setHtitle] = useState("")
    // const [Hlocation, setHlocation] = useState("")
    // const [Hprice, setHprice] = useState("")
    // const [Hauthor, setauthor] = useState("")
    // const [HcreatedAt, setHcreatedAt] = useState("")
    // const [HupdatedAt, setHupdatedAt] = useState("")
    //
    const [returnedPosts, setReturnedPosts] = useState("empty")
    
    console.log(returnedPosts, "is returnedposts")

    useEffect(() => {
        displayPosts(setReturnedPosts)
    }, [])

    useEffect(() => {
        console.log(returnedPosts)
        if (returnedPosts != "empty")   {
            // console.log(returnedPosts.data.posts)
        }
        
    }, [returnedPosts])
    
    async function postClicked(description, title, location, price, author, createdAt, updatedAt){
        
        setSdescription(description)
        setHtitle(title)
        setHlocation(location)
        setHprice(price)
        setauthor(author)
        setHcreatedAt(createdAt)
        setHupdatedAt(updatedAt)
        setHid(id)
    }

if (returnedPosts != "empty")   {
return (
<div>

<h1 id="header">Posts</h1>
<Link to ="/addpost">
<h3 id="addPost">(add post)</h3>
</Link>

{returnedPosts.data.posts.map(({description, title, location, price, author, createdAt, updatedAt, _id}) => (
    
    <Link onClick={() => postClicked(description, _id, title, location, price, author, createdAt, updatedAt)} to ="/singlepost">
    <div  class="userPosts">
        <p id="title">{title}</p>
        <p id="id">{_id}</p>
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