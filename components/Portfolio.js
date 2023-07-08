import { SiPolymerproject } from "react-icons/si";
import Image from "next/image";
import web1 from "../images/app1.png";
import web2 from "../images/app2.png";
import web3 from "../images/app3.png";
import web4 from "../images/app4.png";
import web5 from "../images/app5.png";
import web6 from "../images/app6.png";
import web7 from "../images/app00.png";

export default function Portfolio() {
  return (
    <section>
      <div className="flex flex-col text-center items-center justify-center mt-10 py-10">
        <SiPolymerproject className="text-teal-600 text-6xl mb-4" />
        <h3 className="text-teal-600 text-4xl mb-4 py-1 dark:text-white ">
          Portofolio
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          These are a list of my personal project as a Software Engineer. You can
          find projects on other Software Applications on my
          <span className="text-teal-500"> Github </span>
          for example{" "}
          <span className="text-teal-500">
            {" "}
            Mobile Applications, Desktop Applications, Machine Learning Projects etc{" "}
          </span>
          I work daily on new projects so feel free to contact me if you want a
          collaboration.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            src={web5}
            alt="Portfolio Image"
          />
          <p className="bottom-0 left-0 right-0 px-4 py-2 font-bold text-center">
          My Portfolio App
          </p>
        </div>
        <div className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105 hover:text-white">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web6}
          />
          <p className="bottom-0 left-0 right-0 px-4 py-2 font-bold text-center">
            
            Uche's Diary (Blog App)
          </p>
        </div>

        <div className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web7}
          />
          <p className="bottom-0 left-0 right-0 px-4 py-2 font-bold text-center">
            Ecommerce Dashboard
          </p>
        </div>
        <div className="basis-1/3 flex-1  text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web2}
          />
          <p className="bottom-0 left-0 right-0 px-4 py-2 font-bold text-center">
            Trivia Application
          </p>
        </div>
        <div className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web1}
          />
          <p className="bottom-0 left-0 right-0 px-4 py-2 font-bold text-center">
            To-do List App
          </p>
        </div>
        <div className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web3}
          />
          <p className="bottom-0 left-0 right-0 px-4 py-2 font-bold text-center">
            Event Page
          </p>
        </div>
      </div>
    </section>
  );
}
