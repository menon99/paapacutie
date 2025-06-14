import { motion } from 'framer-motion';
import "../styles/PhotoCard.css"; 

const PhotoCard = ({ image, caption }) => {
  return (
    <motion.div
      className="photo-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <img src={image} alt={caption} className="photo-image" />
      <div className="photo-caption">
        {caption}
      </div>
    </motion.div>
  );
};

export default PhotoCard;
