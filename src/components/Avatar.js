import { motion } from "framer-motion";
import dani from "../images/dani.png";

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function Avatar() {
  return (
    <motion.div variants={item} initial="hidden" animate="show">
      <motion.div
        //? should i keep it like this
        className="mx-auto mb-2 h-[200px] w-[200px] self-center rounded-md"
      >
        <motion.img
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 10px 0px rgba(242,214,138, 1)",
          }}
          whileTap={{
            scale: 0.9,
          }}
          src={dani}
          alt="the definition of gravity 😂"
          className="h-full w-full rounded-md object-cover"
        />
      </motion.div>
      <motion.span
        whileHover={{
          fontSize: "26px",
          textShadow: "0px 0px 8px rgba(255,255,255, 0.5)",
        }}
        className="w-[500px] cursor-pointer text-2xl text-slate-400"
      >
        Daniel Hemmati (aka DanielCodex)
      </motion.span>
    </motion.div>
  );
}

export default Avatar;
