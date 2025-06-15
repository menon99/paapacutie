import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PhotoCard from "./PhotoCard";
import "../styles/PhotoCarousel.css";

const photos = [
  {
    image: "/images/image1.jpeg",
    caption: "Caption 1",
  },
  {
    image: "/images/image1.jpeg",
    caption: "Caption 2",
  },
  {
    image: "/images/image1.jpeg",
    caption: "Caption 3",
  },
];

const PhotoCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + photos.length) % photos.length);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="carousel-container">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={photos[index].image}
          className="carousel-slide"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <PhotoCard
            image={photos[index].image}
            caption={photos[index].caption}
          />
        </motion.div>
      </AnimatePresence>

      <div className="carousel-controls">
        <button className="carousel-btn" onClick={() => paginate(-1)}>
          <div className="arrow left" />
        </button>
        <button className="carousel-btn" onClick={() => paginate(1)}>
          <div className="arrow right" />
        </button>
      </div>
    </div>
  );
};

export default PhotoCarousel;
