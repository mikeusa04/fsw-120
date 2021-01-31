//import logo from './logo.svg';
import React from "react"
import Component from "./Component"
import './style.css';

function App() {
  return (
    <div className="components">
      <Component
          contact={{name: "Component 1", subtitle: "Learn React", information: "Go to scrimba.com"}}
      />
      <Component
          contact={{name: "Component 2", subtitle: "Learn javascript", information: "Go to w3aschool.com"}}
      />
      <Component
          contact={{name: "Component 3", subtitle: "Learn React", information: "Go to vschool.com"}}
      />     
      <Component
          contact={{name: "Component 4", subtitle: "Learn English", information: "Go to U.S.A"}}
      />
      <Component
          contact={{name: "Component 5", subtitle: "Learn Spanish", information: "Go to Spain"}}
      />
      <Component
          contact={{name: "Component 6", subtitle: "Learn Arbic", information: "Use translator"}}
      />
      <Component
          contact={{name: "Component 7", subtitle: "Buy a car", information: "Go to cars.com"}}
      />
      <Component
          contact={{name: "Component 8", subtitle: "Learn Programing ", information: "Go to Bryan University"}}
      />
      <Component
          contact={{name: "Component 9", subtitle: "Become a cop", information: "Go to the police academy"}}
      />
      <Component
          contact={{name: "Component 10", subtitle: "Visit middle east", information: "Go to Dubai first"}}
      />
    </div>
  );
}

export default App;
