import React,  {useEffect}from "react"
import dMobile from "../assets/destination/background-destination-mobile.jpg"
import {Link} from "react-router-dom"


function Destination(){

    const [data,setData] = React.useState()
    const [index,setIndext] = React.useState(0)

    useEffect(async() => {
        const response = await fetch('data.json')
        const data = await response.json()
        setData(data.destinations)

    }, [])
    
    console.log(data)
   
        if(data){
            return(
            <div className="destination-content" >
                <h5 className="destination-title"> <span>01</span> pick your destination</h5>
                <h1>{data[index].name}</h1>
            </div>
            )
        }

        return(
            <div></div>
        )

  
    
}

export default Destination