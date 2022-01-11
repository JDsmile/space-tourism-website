import React from "react"
import img1 from "../assets/technology/image-launch-vehicle-landscape.jpg"
import img2 from "../assets/technology/image-spaceport-landscape.jpg"
import img3 from "../assets/technology/image-space-capsule-landscape.jpg"
import tech from "../data.json"

function Technology(){

    const [data,setData] = React.useState(tech.technology)
    const [index,setIndex] = React.useState(0)
    const [img, setImg] = React.useState(img1)


    function activeContent(item,value){
        setIndex(value)
        if(value===1){
            setImg(img2)
        }else if(value===2){
            setImg(img3)
        }else{
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