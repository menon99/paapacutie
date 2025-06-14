import FancyText from "../components/FancyText";
import PhotoCard from "../components/PhotoCard";
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <FancyText 
          text="Every moment with you feels like a dream." 
          highlightWords={["moment", "dream"]} 
        />
      </div>

      <div className="hero-photo">
        <PhotoCard 
          image="/images/image1.jpeg" 
          caption="Captured in my heart forever." 
        />
      </div>
    </section>
  );
};

export default HeroSection;
