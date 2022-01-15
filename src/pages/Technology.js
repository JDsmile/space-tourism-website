import React from "react"

import img1 from "../assets/technology/image-launch-vehicle-landscape.jpg"
import img2 from "../assets/technology/image-spaceport-landscape.jpg"
import img3 from "../assets/technology/image-space-capsule-landscape.jpg"
import img1p from "../assets/technology/image-launch-vehicle-portrait.jpg"
import img2p from "../assets/technology/image-spaceport-portrait.jpg"
import img3p from "../assets/technology/image-space-capsule-portrait.jpg"
import tech from "../data.json"
import { configure } from "@testing-library/react"
import { useEffect } from "react/cjs/react.development"
import {useLayoutEffect} from "react"
import { act } from "react-dom/test-utils"

function Technology(){

    const [data,setData] = React.useState(tech.technology)
    const [index,setIndex] = React.useState(0)
    const [img, setImg] = React.useState(img1)


    //change image if resizing the 
    // const [windowWidth, setDimensions] = React.useState(
    //     window.innerWidth
    //   )
    //   const handleResize = () => {
    //     setDimensions(window.innerWidth);
    //   }
    
    //   React.useEffect(() => {
    //     window.addEventListener('resize', handleResize)
        
    //     if(index===1){
    //         setImg(img2)
    //         if(windowWidth>=768){
    //             setImg(img2p)
    //         }
    //     }else if(index===2){
    //         setImg(img3)
    //         if(windowWidth>=768){
    //             setImg(img3p)
    //         }

    //     }else if(index===0){
    //         setImg(img1)
    //         if(windowWidth>=768){
    //             setImg(img1p)
    //         }
    //     }
    //     return () => { window.removeEventListener('resize', handleResize) }
    //   });

 
    function activeContent(item,value){
        setIndex(value)
        if(value===1){
            setImg(img2)
       
        }else if(value===2){
            setImg(img3)
         
        }else if(value===0){
            setImg(img1)
        }
    }
    return(
        <div className="tech-container">
            <h5 className="tech-title"> <span>03</span> space launch 101</h5>


            <img src={img} alt="" className="tech-pic"/>
            <ul>
                {
                    data.map((item,value)=>{
                        return(
                            <li key={value} onClick={()=>activeContent(item.name,value) } className={value === index ? "active-tab": undefined}>{value+1}</li>
                        )
                    })
                }
            </ul>
            <h2>the terminology...</h2>
            <h1 className="tech-name">{data[index].name}</h1>
            <p className="description">{data[index].description}</p>
        </div>
    )
}

export default Technology