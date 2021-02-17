/* First watch this video: https://scrimba.com/p/p7P5Hd/cW8Jdfy (Links to an external site.)

Now, build a simple react app with an input box, an <h1>, a button, and an ordered list. The user will type names into the input box.

When the user types in the input box, the <h1> should update to show the same text as the input box.

When the user clicks the button, the value of the input box should be added to a running list of names that have been previous entered. 
(Hint: you'll need to set state and map over an array to do this).*/



import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            names: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick1 = this.handleClick1.bind(this)
    }
    
    handleChange(event) {
        this.setState({ 
            [event.target.name]: event.target.value
        })
    }
    /* or handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }*/

    // you have to add event.preventDefault() or the name would show up then disappear within a half second
    handleClick1 = (event) => {
      event.preventDefault()
      const newItem = this.state.firstName
      this.setState({
        names: [...this.state.names, newItem]
      })
  }

    
    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <button onClick={this.handleClick1}>Add New Name</button>
                <h1>{this.state.firstName}</h1>
                <ol>{this.state.names.map((value, index) => <li key={index}>{value}</li>)}</ol>
            </form>
        )
    }
}

export default App

