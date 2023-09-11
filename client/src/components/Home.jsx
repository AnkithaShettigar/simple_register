import React from "react";
import { useLocation } from "react-router-dom";

const Home = ()=>{
    const location = useLocation()
    return(
        <div>
            <h1>Hi {location.state.id}Welcome to home</h1>
        </div>
    )
}

export default Home