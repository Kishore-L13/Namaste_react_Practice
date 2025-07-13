// StarRating.js

import React, { useState } from 'react';

function StarRating() {
  // Step 1: Create state variables
  // use `rating` to store the selected rating, and `setRating` to update it
const [rating,setRating] = useState(0)
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Star Rating</h1>
      <h3>by NamasteDev</h3>
      <div>
        {[1, 2, 3, 4, 5,6,7].map((star) => (
          <span key={star}
          onClick={() => setRating(star)}
          style={{
            fontSize: "30px",
            cursor: "pointer",
  color:star <=rating ? "gold":"gray",
}}
          >★</span>
          //star code {"\u2605"}
))}
      </div>
      <p>Current Rating: {rating}</p>
      <button onClick={() => setRating(0)}
      style={{
        marginTop: "10px",
        padding: "8px 15px",
        fontSize: "16px",
  cursor:"pointer"
}}
      >Reset Rating</button>
    </div>
  );
}

export default StarRating;
