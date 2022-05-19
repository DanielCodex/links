import Container from "./components/Container";
import { motion } from "framer-motion";
import data from "./data/Data";
import { ImGithub } from "react-icons/im";
import yo from "./images/yo.jpg";

const App = () => {
  return (
    <Container>
      <motion.div className="container mx-auto flex max-w-xl flex-col items-center justify-center text-white">
        <div className="h-[120px] w-[120px] rounded-md">
          <img
            src={yo}
            alt="the definition of gravity 😂"
            className="h-full w-full rounded-md object-contain "
          />
        </div>
        {data.map((item) => item)}
      </motion.div>
      {/* <div className="flex justify-center items-center">
        <ImGithub className="text-white text-3xl" /> <span className="text-white text-3xl">Github</span>
      </div> */}
    </Container>
  );
};

export default App;
