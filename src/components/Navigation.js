import React from "react"
import moblieNav from "../assets/shared/icon-hamburger.svg"
import closeNav from "../assets/shared/icon-close.svg"

function Navigation(){
    const [showMenu,setShowMenu] = React.useState(true)

    //change the menu icon based on the state 
    function toggleMenu(){
        return( setShowMenu(prevState=> !prevState))
    }

    return(
        <img src={showMenu ? moblieNav : closeNav} alt="navigation" onClick={toggleMenu}/>
    )
}

export default Navigation