import React from 'react'
import Home from '../../components/Home'
import Quiz from "./Quiz";

function index(props) {
    console.log("in quiz index", props);
    return (
        <div>
            <Home></Home>
            <h1 style={{margin:"50px"}}>Attempt Quiz!</h1>
            <Quiz props={props}></Quiz>
        </div>
    )
}

export default index
