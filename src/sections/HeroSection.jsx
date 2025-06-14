import FancyText from "../components/FancyText";

export default function HeroSection() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "2rem" }}>
      <FancyText
        text="You are the most beautiful part of my story"
        highlightWords={["beautiful", "story"]}
      />
    </section>
  );
}
