import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PhotoCard from "./PhotoCard";
import "../styles/PhotoCarousel.css";

const photos = [
  { image: "/images/image1.jpeg", caption: "Azhagu Devathai" },
  { image: "/images/image3.jpeg", caption: "Love panlama venama?" },
  { image: "/images/image2.jpeg", caption: "Enai aalum kadhal desam" },
  { image: "/images/image4.jpeg", caption: "Enna ipdi paakadhe Jessy" },
];

const PhotoCarousel = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setIndex(([prevIndex]) => {
      const newIndex =
        (prevIndex + newDirection + photos.length) % photos.length;
      return [newIndex, newDirection];
    });
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    }),
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={photos[index].image}
            className="carousel-animated-card"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5} // smoother, more elastic
            onDragEnd={(e, { offset }) => {
              if (offset.x > 50) paginate(-1);     // reduced from 100 → more sensitive
              else if (offset.x < -50) paginate(1);
            }}
          >
            <PhotoCard
              image={photos[index].image}
              caption={photos[index].caption}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carousel-controls">
        <button className="carousel-button" onClick={() => paginate(-1)}>
          <div className="arrow left" />
        </button>
        <button className="carousel-button" onClick={() => paginate(1)}>
          <div className="arrow right" />
        </button>
      </div>

      <div className="carousel-dots">
        {photos.map((_, i) => (
          <span
            key={i}
            className={`carousel-dot ${i === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
