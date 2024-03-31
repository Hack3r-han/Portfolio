import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "../assets/LEGO_Profile_Pic.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from "../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 backdrop-blur-2xl transition-colors bg-sky-600/70 mx-auto flex justify-between items-center border-b-[1px] px-20">
      <Link spy={true} smooth={true} to="Home">
        <img src={Logo} alt="logo" style={{ width: "80px", height: "auto", cursor: "pointer" }} />
      </Link>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-white tracking-wide hover:text-orange-400 hover:bg-amber-300 hover:rounded-lg hover:p-0.5 transition cursor-pointer"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-3xl mdl:hidden w-10 h-10 inline-flex items-center justify-center text-sky-800 rounded-full cursor-pointer"
        >
          <CiMenuBurger />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen mdl:hidden overflow-scroll absolute top-0 left-0 bg-sky-300 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <Link spy={true} smooth={true} to="Home">
                <img className="w-32 cursor-pointer" src={Logo} alt="logo" />
                </Link>
                <p className="font-mono text-sm text-sky-600 mt-2">
                  I am Hannah Phillips, an optimistic person with an eager passion to learn,
                  driven by curiosity and a voracity to grow. Thank you for visiting my site.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="font-mono text-orange-400 tracking-wide cursor-pointer hover:text-orange-600 duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="uppercase font-mono text-red-600 mb-4">
                  Find me on
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/hlphillips/"
                    target="_blank"
                  >
                    <span className="text-lg w-12 h-12 rounded-full bg-sky-600 inline-flex justify-center items-center text-sky-300 hover:text-orange-400 duration-300 cursor-pointer">
                      <FaLinkedinIn />
                    </span>
                  </a>
                  <a href="https://github.com/Hack3r-han" target="_blank">
                    <span className="text-lg w-12 h-12 rounded-full bg-sky-600 inline-flex justify-center items-center text-sky-300 hover:text-orange-400 duration-300 cursor-pointer">
                      <FaGithub />
                    </span>
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-sky-600 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <FaTimes />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
