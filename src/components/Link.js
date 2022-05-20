import { motion } from "framer-motion";

function Link({ link, children }) {
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 10px 0px rgba(242,214,138, 1)",
        textShadow: "0px 0px 8px rgba(255,255,255, 0.5)",
      }}
      whileTap={{
        scale: 0.7,
      }}
      href={link}
      target="_blank"
      rel="noreferrer"
      className="mb-2 mt-2 flex w-1/2 items-center justify-center rounded-lg  p-2 dark:bg-[#1a1d23] shadow-2xl "
    >
      {children}
    </motion.a>
  );
}

export default Link;
