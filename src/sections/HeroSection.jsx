import FancyText from "../components/FancyText";
import PhotoCard from "../components/PhotoCard";
import '../styles/HeroSection.css'; // Assuming you have a CSS file for styling

const HeroSection = ({ background, text, highlightWords, image, caption }) => {
  return (
    <section className="hero-section" style={{ background }}>
      <div className="hero-text">
        <FancyText text={text} highlightWords={highlightWords} />
      </div>

      <div className="hero-photo">
        <PhotoCard image={image} caption={caption} />
      </div>
    </section>
  );
};

export default HeroSection;
