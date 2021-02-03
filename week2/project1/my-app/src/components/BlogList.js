import React from "react"
import Card from "./BlogPost"
import array from "./array"

function BlogList() {
    const newArray = array.map(card => <Card key={card.id} title={card.title} subTitle={card.subTitle} author={card.author} date={card.date} />)
    return (
      <div className="cards">
        {newArray}
      </div>
    );
  }

export default BlogList