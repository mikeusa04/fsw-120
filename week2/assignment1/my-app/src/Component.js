import React from "react"

function Component(props) {
    return (
        <div className="container">
            <h1>{props.contact.name}</h1>
            <h3>Subtitle: {props.contact.subtitle}</h3>
            <p>Infromatio: {props.contact.information}</p>
        </div>
    )
}

export default Component