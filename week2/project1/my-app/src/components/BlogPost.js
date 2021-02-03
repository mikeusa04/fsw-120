import React from "react"

function Card(props) {
    return (
        // either <div className="onecard">
        <div style={{backgroundColor: "gray"}}> 
            <h2 style={{fontSize: 40}}>{props.title}</h2>
            <h5 style={{fontSize: 30}}>{props.subTitle}</h5>
            <p style={{color: "whitesmoke"}}>Author:  {props.author}</p>
            <p >{props.date}</p>
            <hr/>
        </div>
    )
}

export default Card