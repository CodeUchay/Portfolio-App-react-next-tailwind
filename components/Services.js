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
          I create projects  as a 
          software engineer and full stack developer , I've worked with an IT service
          <span className="text-teal-500"> company </span>
          and also handled websites for some <br/> <span className="text-teal-500">firms </span>
          and i am currently on track to become a machine learning engineer to grow further.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Asides this, i am a business owner, fashion designer and a model
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1  dark:text-gray-200 items-center text-lg  hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105 dark:bg-teal-600">
          <Image src={design} alt="Designer" width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2">Build your design</h3>
          <p className="py-2">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-600 flex-1  dark:text-gray-200 items-center text-lg  hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105">
          <Image src={code} alt="My Service" width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">
            Code your dream project
          </h3>
          <p className="py-2">
            Do you have an idea for your next great website? Mobile Application? Machine Learning? Let's make it a
            reality.
          </p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-teal-600 flex-1  dark:text-gray-200 items-center text-lg  hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105">
          <Image src={consulting} alt="My Service" width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Web Administration</h3>
          <p className="py-2">
           Do you need someone to handle your website, SEO and create the best user experience? Lets go!
          </p>
        </div>
      </div>
    </section>
  );
}
