import { BiCodeAlt } from "react-icons/bi";
import Image from "next/image";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";

export default function Services() {
  return (
    <section className="scroll-smooth">
      <div className="flex flex-col text-center items-center justify-center mt-10">
        <BiCodeAlt className="text-teal-600 text-6xl mb-4" />
        <h3 className="text-teal-600 text-4xl mb-4 py-1 dark:text-white ">
          Services
        </h3>

        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1  dark:text-gray-200 items-center text-lg  hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105 dark:bg-teal-600">
          <Image src={design} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2  ">Beautiful Designs</h3>
          <p className="py-2">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-600 flex-1  dark:text-gray-200 items-center text-lg  hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105">
          <Image src={code} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">
            Code your dream project
          </h3>
          <p className="py-2">
            Do you have an idea for your next great website? Let's make it a
            reality.
          </p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-teal-600 flex-1  dark:text-gray-200 items-center text-lg  hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105">
          <Image src={consulting} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
          <p className="py-2">
            Are you interested in feedback for your current project? I can give
            you tips and tricks to level it up.
          </p>
        </div>
      </div>
    </section>
  );
}
