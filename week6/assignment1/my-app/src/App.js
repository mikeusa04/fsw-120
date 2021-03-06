import React, {Component} from "react";
import './App.css';
import * as math from "mathjs"

class App extends Component {
  constructor (){
    super();
    this.state = {
      result: 0,
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      operators: ["+", "-", "*", "/", "=", "C"],
      equation: ""
    }
  }

  numberClick = (number) => {
    //console.log(number)
    this.setState({equation:this.state.equation + number})
  }

  operatorClick = (operator) => {
    //console.log(operator)
    if(operator === "="){
      this.setState({result:math.evaluate(this.state.equation)})
    } else if(operator === "C"){
      this.setState({result: 0})
      this.setState({equation: ""})
    }
    else{
      this.setState({equation:this.state.equation + operator})
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Calculator App</h1>
        <div className="numbers">
          {this.state.numbers.map((number, index) => {
            return (
              <button key={index} onClick={() => this.numberClick(number)} className="button"> {number} </button>
            )
          })}
        </div>
        <div>
          {this.state.operators.map((operator, index) => {
            return (
              <button key={index} onClick={() => this.operatorClick(operator)} className="operators"> {operator} </button>
            )
          })}
        </div>
        <div>
          <h2>The Equation is : {this.state.equation}</h2>
          <h1>The Result is : {this.state.result}</h1>
        </div>
      </div>
    );
  }
}

export default App;
