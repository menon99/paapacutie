import { useState } from "react";
import ShapesContainer from "./ShapesContainer";
import "../styles/AnimatedBackground.css"; 

const AnimatedBackground = () => {
  const [slide, setSlide] = useState(0);

  const handleNext = () => setSlide((prev) => prev + 1);
  const handlePrev = () => setSlide((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="animated-background">
      <ShapesContainer currentSlide={slide} />
      
      <div className="controls">
        <button onClick={handlePrev}>⬅ Previous</button>
        <button onClick={handleNext}>Next ➡</button>
      </div>
    </div>
  );
};

export default AnimatedBackground;
