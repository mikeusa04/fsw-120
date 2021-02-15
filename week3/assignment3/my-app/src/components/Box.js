import React from "react"
import "./box.css"

class Box extends React.Component {
    
    render() {
        const styles = {
            backgroundColor: this.props.boxColor,
            height: this.props.height,
            width: this.props.width
        }
        
        return (
            <div style={styles} className="box"></div>
            
            
        )
    }
}

export default Box