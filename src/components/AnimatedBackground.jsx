import StarsBackground from "./StarsBackground";
import FancyText from "./FancyText";
import PhotoCarousel from "./PhotoCarousel";
import "../styles/AnimatedBackground.css";

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <StarsBackground />
      <FancyText
        text="This is to certify that Ridhi is the cutest girl in the universe"
        highlightWords={["Ridhi", "cutest", "universe"]}
      />
      <PhotoCarousel />
    </div>
  );
};

export default AnimatedBackground;
