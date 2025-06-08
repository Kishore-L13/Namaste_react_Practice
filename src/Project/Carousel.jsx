import React, { useState } from 'react'

 const cards = [
    { title: "Card 1", description: "Description for Card 1" },
    { title: "Card 2", description: "Description for Card 2" },
    { title: "Card 3", description: "Description for Card 3" },
  ];

const Carousel = () => {
   
    const [index,setIndex] = useState(0)
    if (!cards || cards.length === 0) {
    return <div>No cards available</div>
  }
   const currentCard = cards[index];
  return (
    <div>
        <h2>{currentCard.title}</h2>
        <p>{currentCard.description}</p>
        <button onClick={()=>setIndex(index-1)} disabled={index===0}>Previous</button>
        <span>{index+1}</span>
        <button onClick={()=>setIndex(index+1)} disabled={index===cards.length-1}>Next</button>
    </div>
  )
}

export default Carousel