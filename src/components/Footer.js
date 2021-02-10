import React from 'react'
import {Link} from "react-router-dom"


const Footer = () =>{
    return (
        <footer>
            <p>Copyright - Harika &copy; 2021 </p>
            <Link className ="btn btn" to="/about">ABOUT</Link>
        </footer>
    )
}

export default Footer
