import StarsBackground from "./StarsBackground";
import "../styles/AnimatedBackground.css";
import PhotoCarousel from "./PhotoCarousel";

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <StarsBackground />
      <PhotoCarousel />
    </div>
  );
};

export default AnimatedBackground;
