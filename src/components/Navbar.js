import React from "react"

import {Link} from "react-router-dom"
import logo from "../logo.svg"
import {useGlobalcontext} from "../context"

//!! REMEMBER TO IMPORT YOUR LOGO FROM THE REACT COLLECTIONS FILE

export default function  Navbar () {
    const {scrolled} = useGlobalcontext()
    return(
        <nav className ={`${scrolled? "scrolled":"navbar"}`}>
            <div className ="nav-center">
               < Link to = "/">
               <img src = {logo} alt ="cocktail db logo" className ="logo" />
                </ Link>
                <ul className ="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}