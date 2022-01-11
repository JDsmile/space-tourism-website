import React,  {useEffect, useState}from "react"
import {Link} from "react-router-dom"
import destinations from "../data.json"
import moon from "../assets/destination/image-moon.png"
import mars from "../assets/destination/image-mars.png"
import europa from "../assets/destination/image-europa.png"
import titan from "../assets/destination/image-titan.png"


function Destination(){

    const [data,setData] = React.useState(destinations.destinations)
    const [index,setIndex] = React.useState(0)
    const [img,setImg] = React.useState(moon)
    
    function changeContent(value,name){

        setIndex(value)        
        if(name ==="Mars"){
            setImg(mars)
        } else if(name==="Europa"){
            setImg(europa)
        }else if(name==="Titan"){
            setImg(titan)
        }else{
            setImg(moon)
        }
    }

        if(data){
            return(
            <div className="destination-content" >
                <h5 className="destination-title"> <span>01</span> pick your destination</h5>
               
                <img src={img} alt={data[index].name} className="destination-pic"/>
                <ul>
                {
                    data.map((item,value)=>{
                        return(
                                <li key={value} onClick={()=>changeContent(value,item.name) } className={value===index ? "active-tab" : undefined}>{item.name}</li>
                        )
                    })
                }
                </ul>

                <h1 className="title" >{data[index].name }</h1>
                <p className="description">{data[index].description}</p>

                <footer>
                    <h3>avg.distance</h3>
                    <h2>{data[index].distance}</h2>

                    <h3>est.Travel time</h3>
                    <h2>{data[index].travel}</h2>
                </footer>
            </div>
            )
        }
        return(
            <div></div>
        )
}

export default Destination