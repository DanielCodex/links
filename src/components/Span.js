import { motion } from "framer-motion";


function Span({ children }) {
  return (
    <motion.span
      className="text-2xl capitalize dark:text-white text-black text-center"
    >
      {children}
    </motion.span>
  );
}

export default Span;
