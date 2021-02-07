import React from "react"
function shoot() {
    alert("you clicked me")
}
class Card extends React.Component {
    mouseMove() {
        alert("Your mouse is over the picture")
    }
    render() {
        return (
            // either <div className="onecard">
            <div style={{backgroundColor: "gray"}} onClick={shoot}> 
                <h2 style={{fontSize: 40}}>{this.props.card.name}</h2>
                <h5 style={{fontSize: 30}}>{this.props.card.show}</h5>
                <p style={{color: "whitesmoke"}}>{this.props.card.catchPhrase}</p>
                <img src={this.props.card.imageName} onMouseMove={this.mouseMove}/>
                <hr/>
            </div>
        )
    }
}

export default Card


/* another way to write the component the above is the (class based component) the below is the (functional components)
function Card(props) {
    return (
        // either <div className="onecard">
        <div style={{backgroundColor: "gray"}} onClick={shoot}> 
            <h2 style={{fontSize: 40}}>{props.card.name}</h2>
            <h5 style={{fontSize: 30}}>{props.card.show}</h5>
            <p style={{color: "whitesmoke"}}>{props.card.catchPhrase}</p>
            <img src={props.card.imageName}/>
            <hr/>
        </div>
    )
}*/
