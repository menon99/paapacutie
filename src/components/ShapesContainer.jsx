import { motion } from "framer-motion";
import "../styles/ShapesContainer.css";

const SHAPE_TRANSLATE = 20;

const ShapesContainer = ({ currentSlide }) => {
  return (
    <div className="shapes-container">
      <div className="shapes-inner">
        {/* Triangle → leftmost */}
        <motion.div
          className="shape triangle"
          animate={{
            x: -100 + currentSlide * -SHAPE_TRANSLATE,
            y: 0 + currentSlide * SHAPE_TRANSLATE,
            rotate: currentSlide * 180,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Circle → right of triangle, brought down near triangle, only move vertically */}
        <motion.div
          className="shape circle"
          animate={{
            x: 65, // Fixed → no horizontal movement
            y: -10 - currentSlide * SHAPE_TRANSLATE, // Only vertical
            rotate: currentSlide * 180,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Rectangle → move more to right and slightly up */}
        <motion.div
          className="shape rectangle"
          animate={{
            x: 50 + currentSlide * SHAPE_TRANSLATE,
            y: 70 + currentSlide * SHAPE_TRANSLATE,
            rotate: currentSlide * 180,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default ShapesContainer;