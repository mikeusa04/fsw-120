/*Now that you’ve watched the videos you can build a React app that displays a list of superheroes with their name and image. When any part of the superhero component (name or image) is clicked, that superhero's catchphrase should show up in an alert box on the screen.
Your app should use:
a <SuperHero/> component
A JSON file where all the superhero information is stored. Feel free to use the JSON provided and put it in a .json file.
.map to display the correct number of component instances (based on however many superheroes you have in your JSON file)
An event handler function that gets passed down to the child <SuperHero/> component
Hints:
import data from data.json will get you your data, and name it data. create-react-app has a loader that will load that file and turn it to JavaScript.
Your .map should either go inside of your <App /> or inside a new <HeroList /> component.*/




import React from "react"
import SuperHero from "./components/SuperHero"
import './App.css';

function App() {
  return (
    <div className="App">
      <SuperHero />
    </div>
  );
}

export default App;
