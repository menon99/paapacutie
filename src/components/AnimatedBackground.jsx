import StarsBackground from "./StarsBackground";
import FancyText from "./FancyText";
import PhotoCarousel from "./PhotoCarousel";
import "../styles/AnimatedBackground.css";

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <StarsBackground />
      <div className="content-wrapper">
        <div className="text-container">
          <FancyText
            text="This is to certify that Ridhi is the Cutest girl in the Universe"
            highlightWords={["Ridhi", "Cutest", "Universe"]}
          />
        </div>
        <div className="carousel">
          <PhotoCarousel />
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
