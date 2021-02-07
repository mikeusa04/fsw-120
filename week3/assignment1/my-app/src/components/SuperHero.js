import React from "react"
import Card from "./SuperHeroCard"
import data from "./data"

function SuperHero() {
  /* you could use this 
  const newArray = array.map(card => <Card key={card.id} name={card.name} show={card.show} catchPhrase={card.catchPhrase} imageNme={card.imageName} />)
  but you have to go to SuperHeroCard.js and change each props.card. name to props.name and to the rest also over there*/ 
  const newArray = data.map(card => <Card key={card.id} card={card} />)
  return (
    <div className="cards">
      {newArray}
    </div>
  );
}

export default SuperHero