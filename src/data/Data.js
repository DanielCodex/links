import Span from "../components/Span";
import Link from "../components/Link";
import { ImYoutube } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { SiOnlyfans } from "react-icons/si";

const data = [
  <Link link="https://danielcodex.com/">
    <Span>😎 DanielCodex blog</Span>
  </Link>,
  <Link link="https://www.youtube.com/channel/UCCFmRwWxbDcIJ1GSijnLqZA">
    <ImYoutube className="mr-2 mt-[2px] text-2xl text-red-600 " />{" "}
    <Span>Youtube</Span>
  </Link>,
  <Link link="https://github.com/DanielCodex">
    <ImGithub className="mr-2 mt-[2px] text-2xl text-white " />{" "}
    <Span>Github</Span>
  </Link>,
  <Link link="https://twitter.com/Daniel_codex">
    <AiOutlineTwitter className="mr-2 mt-[2px] text-2xl text-blue-400" />{" "}
    <Span>Twitter</Span>
  </Link>,
  <Link link="https://www.linkedin.com/in/daniel-hemmati/">
    <AiFillLinkedin className="mr-2 mt-[2px] text-2xl text-blue-500" />{" "}
    <Span>Linkedin</Span>
  </Link>,
  <Link link="https://getmakerlog.com/users/danielcodex">
    <MdDone className="mr-2 mt-[2px] text-2xl text-lime-500" />{" "}
    <Span>makerlog</Span>
  </Link>,
  <Link link="https://www.instagram.com/daniell_codex/">
    <AiOutlineInstagram className="mr-2 mt-[2px] text-2xl text-red-400" />{" "}
    <Span>Instagram</Span>
  </Link>,
  <Link link="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
    <SiOnlyfans className="mr-2 mt-[2px] text-2xl text-[#da552f]" />{" "}
    <Span>Onlyfan</Span>
  </Link>,
];

export default data;
