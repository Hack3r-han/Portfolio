import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn, FaReact, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiTypescript } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["User Experiences.", "Creative Solutions.", "Tireless Inspiration."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section className="w-full lgl:w-1/2 flex flex-col gap-20 p-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-mono font-normal text-sky-600">WELCOME TO MY SITE</h4>
        <h1 className="text-6xl font-mono font-bold text-sky-600">
          I am a Builder
        </h1>
        <h2 className="text-4xl font-mono font-bold text-sky-600">
          of <span className="text-orange-400">{text}</span>
          <Cursor cursorStyle="|" cursorColor="#FFA726" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        I work hard to deliver seamless user experiences, combining creativity and technical 
        expertise to transform ideas into captivating results.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/hlphillips/" target="_blank">
              <span className="text-lg w-12 h-12 rounded-full bg-sky-600 inline-flex justify-center items-center text-sky-300 hover:text-orange-400 duration-300 cursor-pointer">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://github.com/Hack3r-han" target="_blank">
              <span className="text-lg w-12 h-12 rounded-full bg-sky-600 inline-flex justify-center items-center text-sky-300 hover:text-orange-400 duration-300 cursor-pointer">
                <FaGithub />
              </span>
            </a>
            <a href="https://rabillodepasa.wordpress.com/" target="_blank">
              <span className="text-lg w-12 h-12 rounded-full bg-sky-600 inline-flex justify-center items-center text-sky-300 hover:text-orange-400 duration-300 cursor-pointer">
                <FaWordpress />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            STARRED SKILLS
          </h2>
          <div className="flex gap-4">
            <span className="text-lg w-12 h-12 rounded-full bg-sky-600 inline-flex justify-center items-center text-sky-300 hover:text-orange-400 duration-300">
              <FaReact />
            </span>
            <span className="text-lg w-12 h-12 rounded-full bg-sky-600 inline-flex justify-center items-center text-sky-300 hover:text-orange-400 duration-300">
              <SiTypescript />
            </span>
            <span className="text-lg w-12 h-12 rounded-full bg-sky-600 inline-flex justify-center items-center text-sky-300 hover:text-orange-400 duration-300">
              <SiTailwindcss />
            </span>
            <span className="text-lg w-12 h-12 rounded-full bg-sky-600 inline-flex justify-center items-center text-sky-300 hover:text-orange-400 duration-300">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftBanner;
