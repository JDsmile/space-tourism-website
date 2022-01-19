import React,{useContext}from "react"
import logo from '../assets/shared/logo.svg'
import moblieNav from "../assets/shared/icon-hamburger.svg"
import closeNav from "../assets/shared/icon-close.svg"
import {Link} from "react-router-dom"
import Homepage  from '../pages/Homepage'
import {Routes,Route} from "react-router-dom"
import { useEffect } from "react/cjs/react.development"

import {BrowserRouter } from "react-router-dom"



function Header(){
    const [openNav,setOpenNav] = React.useState(true)
    const [index,setIndex] = React.useState(0)
    const links=[
        {
            id:0,
            to:"/",
            name: "HOME",
            num:"00",
        },
        {
            id:1,
            to: "/destination",
            name:"DESTINATION",
            num:"01",
        },
        {
            id:2,
            to: "/crew" ,
            name:"CREW",
            num:"02",
        },
        {
            id:3,
            to: "/technology",
            name:"TECHNOLOGY",
            num:"03",
        },
     
    ]

        //change the menu icon based on the state 
    function toggleMenu(link,value){
        setIndex(value)
        if(window.innerWidth<768){

            setOpenNav(prevState=> !prevState)
        }
    }
    
    const style={
        display: openNav ? "none" : "block"
    }

    return(
        <header>
            <img src={logo} alt="logo" className="logo"/>
            {/* display moblie nav */}
            <img src={openNav ? moblieNav : closeNav} alt="navigation" onClick={toggleMenu} className='mobile-nav'/>  
   
            <nav className="navi" style={style}>
                
                <ul>

                    {
                        links.map((link,value)=>{
                            return(
                              
                                <Link to ={link.to} key={link.id} onClick={()=>toggleMenu(link,value)}><li  className={value===index ? "active-tab" : undefined}><span className="num">{link.num} </span>{link.name}</li></Link>
                            )
                        })
                    }
                </ul>
            </nav>
         
        </header>
    )
}

export default Header