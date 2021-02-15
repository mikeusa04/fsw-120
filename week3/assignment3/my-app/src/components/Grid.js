import React from "react"
import Box from "./Box"
import "./style.css"
class Grid extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: [ "white", "white", "white", "white"]
        }}

    handleClick1 = () => {
        var colorHolder
        this.setState(prevState => {
            if(prevState.colors[0] !== "white"){
            colorHolder = ["white", "white", "white", "white"]
        }
        else if(prevState.colors[0] === "white"){
            colorHolder = ["black", "black", "black", "black"]
        }
        return {
            colors: colorHolder
        }
    })
    }

    handleClick2 = () => {
        var colorHolder
        this.setState(prevState => {
            colorHolder = ["purple", "purple", prevState.colors[2], prevState.colors[3]]
            return {
                colors: colorHolder
            }
        })
    }

    handleClick3 = () => {
        var colorHolder
        this.setState(prevState => {
            colorHolder = ["purple", "purple", "blue", prevState.colors[3]]
            return {
                colors: colorHolder
            }
        })
    }

    handleClick4 = () => {
        var colorHolder
        this.setState(prevState => {
            colorHolder = ["purple", "purple", prevState.colors[2], "blue"]
            return {
                colors: colorHolder
            }
        })
    }


   
    render() {
        return (
            <div>
               <div className="grid">
                  <Box  boxColor={this.state.colors[0]} height={200} width={200} />
                  <Box  boxColor={this.state.colors[1]} height={200} width={200} />
                  <Box  boxColor={this.state.colors[2]} height={200} width={200} />
                  <Box  boxColor={this.state.colors[3]} height={200} width={200} />
               </div>
               <button onClick={this.handleClick1}>Click me</button>
               <button onClick={this.handleClick2}>Click me</button>
               <button onClick={this.handleClick3}>Click me</button>
               <button onClick={this.handleClick4}>Click me</button>
            </div>
        )
    }
}

export default Grid