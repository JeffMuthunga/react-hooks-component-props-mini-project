import React from "react";
import blogData from "../data/blog"

function Header(props){
    return (
        <h1>{blogData.name}</h1>
    )
}

export default Header