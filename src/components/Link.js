import { motion } from "framer-motion";
import { item } from "./animationConfig/animationConfig";

function Link({ link, children }) {
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
        // this gives me a weird looking animation 😆
        // border: "1px solid rgb(99, 102, 241)",
        boxShadow: "0px 0px 10px 0px rgb(99, 102, 241)",
        textShadow: "0px 0px 8px rgba(255,255,255, 0.5)",
      }}
      whileTap={{
        scale: 0.9,
      }}
      href={link}
      target="_blank"
      rel="noreferrer"
      className="mb-2 mt-2 flex w-1/2 items-center justify-center bg-[#1a1d23] p-2"
    >
      {children}
    </motion.a>
  );
}

export default Link;
