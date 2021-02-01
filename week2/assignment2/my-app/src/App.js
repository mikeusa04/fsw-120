import React from "react"
import array from "./vacationSpots"
import Card from "./Card"
import './style.css'

function App() {
  const cardComponents = array.map(card => <Card key={card.id} place={card.place} price={card.price} timeToGo={card.timeToGo} />)
  return (
    <div>
      {cardComponents}
    </div>
  );
}

export default App;
