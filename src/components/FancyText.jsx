import { motion } from 'framer-motion';
import "../styles/FancyText.css"; 

export default function FancyText({ text, highlightWords = [] }) {
  const parts = text.split(new RegExp(`(${highlightWords.join('|')})`, 'gi'));

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <motion.h1
      className="fancy-text"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {parts.map((part, index) =>
        highlightWords.some(word => word.toLowerCase() === part.toLowerCase()) ? (
          <span key={index} className="highlight">{part}</span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </motion.h1>
  );
}
