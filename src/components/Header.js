import React,{useContext}from "react"
import logo from '../assets/shared/logo.svg'
import moblieNav from "../assets/shared/icon-hamburger.svg"
import closeNav from "../assets/shared/icon-close.svg"
import {Link} from "react-router-dom"
import Homepage  from '../pages/Homepage'
import {Routes,Route} from "react-router-dom"



function Header(){
    const [showMenu,setShowMenu] = React.useState(true)

    //use state to check if menu should be shown
    const menuStyle ={
        display: showMenu ? "none" : "block"
    }
        //change the menu icon based on the state 
        function toggleMenu(){
            return( setShowMenu(prevState=> !prevState))
        }

    return(
        <header>
            <img src={logo} alt="logo" className="logo"/>
            {/* display moblie nav */}
            <img src={showMenu ? moblieNav : closeNav} alt="navigation" onClick={toggleMenu} className='mobile-nav'/>  
   
            <nav style={menuStyle}>
                <ul>
                    <Link to ="/" onClick={toggleMenu}><li ><span className="num" >00</span> Home</li></Link>
                    <Link to ="/destination" onClick={toggleMenu}><li><span className="num">01</span> DESTINATION</li></Link>
                    <Link to ="/crew" onClick={toggleMenu}><li><span className="num">02</span> Crew</li></Link>
                    <Link to ="/technology" onClick={toggleMenu}><li><span className="num">03</span> TECHNOLOGY</li></Link>
                </ul>
            </nav>
         
        </header>
    )
}

export default Header