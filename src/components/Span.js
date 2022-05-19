import { motion } from "framer-motion";


function Span({ children }) {
  return (
    <motion.span
      className="text-2xl capitalize text-white"
    >
      {children}
    </motion.span>
  );
}

export default Span;
