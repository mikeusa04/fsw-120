/*Using what you have just learned about state in React, you are going to create a <DiceBox /> component that renders 5 dice numbers for the user to view.
You Must:
Create a class component called <DiceBox />
Write a method in that class that produces 5 random numbers between 1 and 6 and saves them in state.
Display the 5 random numbers in your <DiceBox /> JSX.
Provide a button the user can click on that will redo step 2 and present the new numbers to the user.
Take it Further:
Create a <Die /> component that receives a random number as a prop and displays it (rather than just displaying the 5 numbers in the <DiceBox /> JSX).
Allow the user to click on a given <Die /> to select it, and that number will not change until the dice reset (resetting is done in the next step).
Have the dice reset (de-selecting all previously selected die and setting their numbers back to 0) after every 3rd roll.
Hints:
Consider starting your state off with 5 numbers like this:
class App extends Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
    }
With this set up, you then need to write a method that uses this.setState to randomly change the 5 numbers to a number between 1 - 6.
Ex: Math.floor(Math.random() * 6;
From there, it’s all about how you want to display those numbers in your return statement.*/



import React from "react";
class DiceBox extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      real1: "true",
      num2: 0,
      real2: "true",
      num3: 0,
      real3: "true",
      num4: 0,
      real4: "true",
      num5: 0,
      real5: "true",
    };
  }
  handleClick = () => {
    if (this.state.real1 === "true") {
      this.setState({
        num1: Math.floor(Math.random() * 6),
      });
    }
    if (this.state.real2 === "true") {
      this.setState({
        num2: Math.floor(Math.random() * 6),
      });
    }
    if (this.state.real3 === "true") {
        this.setState({
          num3: Math.floor(Math.random() * 6),
        });
      }
      if (this.state.real4 === "true") {
        this.setState({
          num4: Math.floor(Math.random() * 6),
        });
      }
      if (this.state.real5 === "true") {
        this.setState({
          num5: Math.floor(Math.random() * 6),
        });
      }
    this.setState({
    });
  };
  singleDie1 = () => {
    if (this.state.real1 === "true") {
      this.setState({
        real1: "false",
      });
    }
  };
  singleDie2 = () => {
    if (this.state.real2 === "true") {
      this.setState({
        real2: "false",
      });
    }
  };
  singleDie3 = () => {
    if (this.state.real3 === "true") {
      this.setState({
        real3: "false",
      });
    }
  };
  singleDie4 = () => {
    if (this.state.real4 === "true") {
      this.setState({
        real4: "false",
      });
    }
  };
  singleDie5 = () => {
    if (this.state.real5 === "true") {
      this.setState({
        real5: "false",
      });
    }
  };
  render() {
    return (
      <div>
        <h1 onClick={this.singleDie1} className="box">{this.state.num1}</h1>
        <br></br>
        <h1 onClick={this.singleDie2} className="box">{this.state.num2}</h1>
        <br></br>
        <h1 onClick={this.singleDie3} className="box">{this.state.num3}</h1>
        <br></br>
        <h1 onClick={this.singleDie4} className="box">{this.state.num4}</h1>
        <br></br>
        <h1 onClick={this.singleDie5} className="box">{this.state.num5}</h1>
        <br></br>
        <button onClick={this.handleClick}>ROLL!</button>
      </div>
    );
  }
}
export default DiceBox;