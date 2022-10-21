import React, {useState, useEffect} from "react"
import { submitPostFunc } from "../api"
import './addpost.css'



const AddPost = () =>   {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [willDeliver, setWillDeliver] = useState("false");

    function submitPost()   {
        submitPostFunc(title, description, price, willDeliver)

    }
    
    return(
        <div>
        <div id="whole">
            <div id="formbody">
                <div id="titleask">
                    <label>Please enter post title: </label>
                    <input class="inputs" type="text" onChange={(event) => setTitle(event.target.value)}></input>
                </div>
                <div id="descriptionask">
                    <label>Please enter the description: </label>
                    <input class="inputs" type="text" onChange={(event) => setDescription(event.target.value)}></input>
                </div>
                <div id="priceAsk">
                    <label>Please enter the price: </label>
                    <input class="inputs" type="text" onChange={(event) => setPrice(event.target.value)}></input>
                </div>
                <div id="willDeliver">
                    <label>Will you deliver? </label>
                    <input class="inputs" type="text" onChange={(event) => setWillDeliver(event.target.value)}></input>
                </div>
                <button id="thebutton" onClick={() => submitPost()}>Submit Post</button>
            </div>
        </div>
        </div>
    )
}


export default AddPost


// fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts', {
//   method: "POST",
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer TOKEN_STRING_HERE'
//   },
//   body: JSON.stringify({
//     post: {
//       title: "My favorite stuffed animal",
//       description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
//       price: "$480.00",
//       willDeliver: true
//     }
//   })
// }).then(response => response.json())
//   .then(result => {
//     console.log(result);
//   })
//   .catch(console.error);