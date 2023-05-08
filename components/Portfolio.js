import { SiPolymerproject } from "react-icons/si";
import Image from "next/image.js";
import web1 from "../public/portfolio1.png";
import web2 from "../public/portfolio2.png";
import web3 from "../public/portfolio3.png";
import web4 from "../public/portfolio4.png";
import web5 from "../public/portfolio5.png";
import web6 from "../public/web6.png";

export default function Portfolio() {
  return (
    <section>
      <div className="flex flex-col text-center items-center justify-center mt-10 py-10">
      <SiPolymerproject className="text-teal-600 text-6xl mb-4" />
        <h3 className="text-teal-600 text-4xl mb-4 py-1 dark:text-white ">
          Portofolio
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
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            src={web1}
          />
        </div>
        <div className="basis-1/3 flex-1 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105 ">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            src={web2}
          />
        </div>
        <div className="basis-1/3 flex-1 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            src={web3}
          />
        </div>
        <div className="basis-1/3 flex-1 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            src={web4}
          />
        </div>
        <div className="basis-1/3 flex-1 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            src={web5}
          />
        </div>
        <div className="basis-1/3 flex-1 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            src={web6}
          />
        </div>
      </div>
    </section>
  );
}
