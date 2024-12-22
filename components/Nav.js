import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiChip, HiBadgeCheck } from "react-icons/hi";
import skills from "../data/skills";

export default function Nav({ darkMode, toggleDarkMode, navOpen, setNavOpen }) {
  return (
    <section className=" scroll-smooth">
      <nav className="py-10 mb-12 flex justify-between dark:text-white">
        <h1 className="font-burtons text-xl">CodeUchay</h1>
        <ul className="flex items-center">
          <li>
            <button className="focus:outline-none" onClick={toggleDarkMode}>
              <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
            </button>
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <span className="font-semibold">EN</span>
            </a>
          </li>
          <li className="hidden lg:block">
            <a
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <span className="font-semibold">FR</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center px-10  ">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Uche Odinamba
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl hidden md:block">
          Full-stack Developer |  Software Engineer
        </h3>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl md:hidden">
          Full-stack Developer Software Engineer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          I'm a Software Engineer in France with a flare for Full-stack
          Development and Artificial Intelligence. I really enjoy building
          digital products that are innovative, performant, scalable and
          globally accessible.
        </p>
        <div className="text-5xl flex justify-center gap-10 md:gap-16 py-3 text-gray-600  dark:text-gray-400">
          <a
            href="https://github.com/codeuchay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="hover:text-teal-500 hover:transform hover:scale-125 hover:duration-300 hover:ease-in-out" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="hover:text-teal-500 hover:transform hover:scale-125 hover:duration-300 hover:ease-in-out" />{" "}
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="hover:text-teal-500 hover:transform hover:scale-125 hover:duration-300 hover:ease-in-out" />{" "}
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTwitterCircle className="hover:text-teal-500 hover:transform hover:scale-125 hover:duration-300 hover:ease-in-out" />{" "}
          </a>
        </div>
        
      </div>
    </section>
  );
}
