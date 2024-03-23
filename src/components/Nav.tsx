import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "../assets/LEGO_Profile.png";

const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 bg-sky-600">
                <div className="flex items-center flex-1">
                    <img src={Logo} alt="Logo" style={{ width: '60px', height: '60px' }}/>
                </div>
                {/* Display navigation links based on screen size */}
                <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link spy={true} smooth={true} to="Home">
                                <li className="hover:text-orange-400 hover:bg-amber-300 hover:rounded-lg hover:p-0.5 transition cursor-pointer">Home</li>
                            </Link>
                            <Link spy={true} smooth={true} to="About">
                                <li className="hover:text-orange-400 hover:bg-amber-300 hover:rounded-lg hover:p-0.5 transition cursor-pointer">About</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Services">
                                <li className="hover:text-orange-400 hover:bg-amber-300 hover:rounded-lg hover:p-0.5 transition cursor-pointer">Services</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Projects">
                                <li className="hover:text-orange-400 hover:bg-amber-300 hover:rounded-lg hover:p-0.5 transition cursor-pointer">Projects</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Contact">
                                <li className="hover:text-orange-400 hover:bg-amber-300 hover:rounded-lg hover:p-0.5 transition cursor-pointer">Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                {/* Burger menu button for small screens */}
                <div className="sm:hidden">
                    {/* Apply styles to make the burger icon bigger and bolder */}
                    <button className="transition text-3xl mt-3" onClick={handleClick}>
                        {click ? <FaTimes/> : <CiMenuBurger/> }
                    </button>
                </div>
            </div>
            {/* Display navigation links for small screens when the burger menu is clicked */}
            {click && (
                <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-sky-600 bg-opacity-40 transition">
                    <ul className="text-center text-xl text-orange-400 p-20">
                        <Link spy={true} smooth={true} to="Home">
                            <li className="my-4 py-4 border-b border-sky-600 hover:bg-sky-600 hover:rounded">Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to="About">
                            <li className="my-4 py-4 border-b border-sky-600 hover:bg-sky-600 hover:rounded">About</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Services">
                            <li className="my-4 py-4 border-b border-sky-600 hover:bg-sky-600 hover:rounded">Services</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Projects">
                            <li className="my-4 py-4 border-b border-sky-600 hover:bg-sky-600 hover:rounded">Projects</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Contact">
                            <li className="my-4 py-4 border-b border-sky-600 hover:bg-sky-600 hover:rounded">Contact</li>
                        </Link>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;