import React from "react"
import logo from '../assets/shared/logo.svg'
import Navigation from './Navigation'

function Header(){
    return(
        <nav>
            <img src={logo} alt="logo" className="logo"/>
            <Navigation />   
        </nav>
    )
}

export default Header