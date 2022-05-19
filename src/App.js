import Container from "./components/Container";
import Avatar from "./components/Avatar";
import Span from "./components/Span";
import Link from "./components/Link";
import { motion } from "framer-motion";
import { ImYoutube, ImGithub } from "react-icons/im";
import { MdDone } from "react-icons/md";
import { SiOnlyfans } from "react-icons/si";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { container } from "./components/animationConfig/animationConfig";

const App = () => {
  document.body.style = "background: #16181d;";
  return (
    <Container>
      <Avatar />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex w-[800px] max-w-full flex-col items-center justify-center"
      >
        <Link link="https://danielcodex.com/">
          <Span>😎 DanielCodex blog</Span>
        </Link>
        <Link link="https://www.youtube.com/channel/UCCFmRwWxbDcIJ1GSijnLqZA">
          <ImYoutube className="mr-2 mt-[2px] text-2xl text-red-600 " />{" "}
          <Span>Youtube</Span>
        </Link>
        <Link link="https://github.com/DanielCodex">
          <ImGithub className="mr-2 mt-[2px] text-2xl text-white " />{" "}
          <Span>Github</Span>
        </Link>
        <Link link="https://twitter.com/Daniel_codex">
          <AiOutlineTwitter className="mr-2 mt-[2px] text-2xl text-blue-400" />{" "}
          <Span>Twitter</Span>
        </Link>
        <Link link="https://www.linkedin.com/in/daniel-hemmati/">
          <AiFillLinkedin className="mr-2 mt-[2px] text-2xl text-blue-500" />{" "}
          <Span>Linkedin</Span>
        </Link>
        <Link link="https://getmakerlog.com/users/danielcodex">
          <MdDone className="mr-2 mt-[2px] text-2xl text-lime-500" />{" "}
          <Span>makerlog</Span>
        </Link>
        <Link link="https://www.instagram.com/daniell_codex/">
          <AiOutlineInstagram className="mr-2 mt-[2px] text-2xl text-red-400" />{" "}
          <Span>Instagram</Span>
        </Link>
        <Link link="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <SiOnlyfans className="mr-2 mt-[2px] text-2xl text-[#da552f]" />{" "}
          <Span>Onlyfan</Span>
        </Link>
      </motion.div>
    </Container>
  );
};

export default App;
