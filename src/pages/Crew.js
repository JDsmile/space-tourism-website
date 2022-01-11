import React from "react"
import crew2 from "../assets/crew/image-mark-shuttleworth.png"
import crew1 from "../assets/crew/image-douglas-hurley.png"
import crew3 from "../assets/crew/image-victor-glover.png"
import crew4 from "../assets/crew/image-anousheh-ansari.png"
import crews from "../data.json"

function Crew(){

    const [crewImage,setCrewImage] = React.useState(crew1)
    const [crew,setCrew] = React.useState(crews.crew)
    const [index,setIndex] = React.useState(0)
    function showcontent(item,value){
        setIndex(value)
        if(value===0){
            setCrewImage(crew1)
        }else if(value===1){
            setCrewImage(crew2)
        }else if(value===3){
            setCrewImage(crew4)
        }else{
            setCrewImage(crew3)
        }
    }
    return(
        <div className="crews-container">
            <h5 className="crews-title"> <span>02</span> meet your crew</h5>
            <div className="img-container">
                <img src={crewImage} alt="" className="crew-image" />
            </div>
                <ul>
                    {
                        crew.map((item,value) =>{
                            return(
                                <li key={value}onClick={()=>showcontent(item,value)} className={`tab ${value===index ? "active-tab" : undefined}`}></li>
                            )
                        })
                    }
                </ul>
                
                <h2 className="crew-role">{crew[index].role}</h2>
                <h2 className="crew-name">{crew[index].name}</h2>
                <p className="crew-bio">{crew[index].bio}</p>
        </div>
    )
}

export default Crew