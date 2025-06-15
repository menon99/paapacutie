import { motion } from "framer-motion";
import "../styles/PhotoCard.css";

const PhotoCard = ({ image, caption }) => {
  return (
    <motion.div
      className="photo-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <img src={image} alt={caption} className="photo-image" />
      <div className="photo-caption">{caption}</div>
    </motion.div>
  );
};

export default PhotoCard;
