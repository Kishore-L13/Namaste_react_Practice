import React, { useState } from 'react';

const Image_Carousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevImage = () => {
    setCurrentIndex((prev)=>(prev === 0? images.length-1:prev-1))
  }
   const nextImage = () => {
     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
   }
  const goToImage = (index) => {
    setCurrentIndex(index)
  }
  if (!images.length) return <p style={{textAlign:"center"}}>No images available.</p>
  return (
    <div
      style={{
        maxWidth: "600px",
        maxHeight: "400px",
        width: "100%",
        margin: "auto",
        postion: "relative",
  background:"black",
}}
    >
      <img
        src={images[currentIndex]?.src}
        alt={`slide${currentIndex}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
  margin:"auto"
}}
      />
      <button
        onClick={prevImage}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "white",
          border: "none",
          padding: "8px",
        cursor:"pointer"
        }}
      id="Previous"
      >⬅</button>
       <button
        onClick={nextImage}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "white",
          border: "none",
          padding: "8px",
        cursor:"pointer"
        }}
      id="Next"
      >➡</button>
      <div style={{textAlign:"center",marginTop:"10px"}}>
        {images.map((_, index) => (
          <button key={index} onClick={() => goToImage(index)}
            style={{
              margin: "0 5px",
              background: index === currentIndex ? "black" : "lightgray",
              borderRadius: "50%",
              width: "12px",
              height: "12px",
              border: "none",
              cursor: "pointer"
            }}
            id={`pageButton-${index}`}
          ></button>
      ))}

      </div>
    </div>
  );
};

export default Image_Carousel;
