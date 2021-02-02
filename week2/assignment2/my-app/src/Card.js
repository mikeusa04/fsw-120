import React from "react"

function Card(props) {
    return (
        <div>
            <h3 style={{color: "red", fontSize: 50}}>Place: {props.place}</h3>
            <h3 style={{fontSize: 35}}>Time to go: {props.timeToGo}</h3>
            <h3 style={{backgroundColor: "white", height: 35, width: 200, }}>Price: {props.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h3>
            <hr/>
        </div>
    )
}

export default Card