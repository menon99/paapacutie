import { useEffect, useState } from "react";
import "../styles/StarsBackground.css";

const NUM_STARS = 150;

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: NUM_STARS }, () => ({
      id: crypto.randomUUID(),
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1, // Size between 1px to 3px
      delay: Math.random() * 5, // Animation delay for twinkle effect
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="stars-layer">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
