import { SiPolymerproject } from "react-icons/si";
import Image from "next/image";
import web0 from "../images/app10.png";
import web1 from "../images/app1.png";
import web2 from "../images/app2.png";
import web3 from "../images/app3.png";
import web4 from "../images/app4.png";
import web5 from "../images/app5.png";
import web6 from "../images/app6.png";
import web7 from "../images/app00.png";
import web8 from "../images/app7.png";
import web9 from "../images/app8.png";
import web10 from "../images/app9.png";
import web11 from "../images/app000.jpg"

export default function Portfolio() {
  return (
    <section>
      <div className="flex flex-col text-center items-center justify-center mt-10 py-10">
        <SiPolymerproject className="text-teal-600 text-6xl mb-4" />
        <h3 className="text-teal-600 text-4xl mb-4 py-1 dark:text-white ">
          Portofolio
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          These are a list of my personal project as a Software Engineer. You
          can find projects on other Software Applications on my
          <span className="text-teal-500"> Github </span>
          for example{" "}
          <span className="text-teal-500">
            {" "}
            Mobile Applications, Web Applications, Machine Learning Projects etc{" "}
          </span>
          I work daily on new projects so feel free to contact me if you want a
          collaboration.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {/** Portfolio App */}
        <a
          href="https://react-portofolio-tailwind-beta.vercel.app"
          className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
        >
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            src={web5}
            alt="Portfolio Image"
          />
          <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
            <p className="font-bold"> My Portfolio App</p>
            <span>React.js, Next.js, Tailwind CSS</span>
          </div>
        </a>
        {/** Eshoes */}
        <a
          href="https://eshoes.com.ng"
          className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
        >
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web0}
          />
          <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
            <p className="font-bold"> Eshoes (Ecommerce website) </p>
            <span>Wordpress, HTML, CSS, PHP, SQL</span>
          </div>
        </a>
        {/** Infinity */}
        <a
          href="https://infinity-five-snowy.vercel.app"
          className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
        >
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web8}
          />
          <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
            <p className="font-bold"> Infinity Tech (Product Landing Page) </p>
            <span>React.js, Tailwind CSS</span>
          </div>
        </a>
        {/** Uche's Diary */}
        <a
          href="https://blog-app-react-firebase.vercel.app"
          className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105 hover:text-white"
        >
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web6}
          />
          <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
            <p className="font-bold"> Uche's Diary (Blog App) </p>
            <span>React.js, Firebase, Mongo DB, REST API</span>
          </div>
        </a>
        
        {/** Trivia */}
        <a
          href="https://trivia-app-cyan.vercel.app"
          className="basis-1/3 flex-1  text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
        >
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web2}
          />
          <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
            <p className="font-bold"> Trivia App </p>
            <span>HTML, CSS, JavaScript</span>
          </div>
        </a>
        {/** To-do List App */}
        <a
          href="https://todo-list-app-uche.vercel.app"
          className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
        >
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web1}
          />
          <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
            <p className="font-bold"> To-do List App </p>
            <span>HTML, CSS, JavaScript</span>
          </div>
        </a>
        {/** To-do List App */}
        <a
          href="https://to-do-list-mauve-ten.vercel.app"
          className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
        >
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web9}
          />
          <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
            <p className="font-bold"> Ol'Task (To-do List App) </p>
            <span> Typescript.js, Tailwind CSS </span>
          </div>
        </a>
        {/** Event Page */}
        <a
          href="https://event-project-esig.vercel.app"
          className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
        >
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web3}
          />
          <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
            <p className="font-bold"> Event Page </p>
            <span> HTML, CSS, JavaScript, PHP, MYSQL </span>
          </div>
        </a>
        {/** Ecommerce Dashboard */}
        <a
          href="https://chefkim-admin.vercel.app"
          className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
        >
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web7}
          />
          <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
            <p className="font-bold"> Ecommerce Admin Page </p>
            <span> React.js, Firebase, Axios, Express, REST </span>
          </div>
        </a>
        {/** Chef Kim Restaurant */}
        <a
          href="https://chefkimkitchen.vercel.app"
          className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
        >
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web10}
          />
          <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
            <p className="font-bold"> Chef Kim Restaurant </p>
            <span> React.js, Tailwind CSS </span>
          </div>
        </a>
        {/** Calculator */}
        <a
          href="https://calculator-delta-roan.vercel.app"
          className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
        >
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web4}
          />
          <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
            <p className="font-bold"> Calculator </p>
            <span> HTML, CSS, JavaScript </span>
          </div>
        </a>
        {/** Place Holder */}
        <a
          href="https://github.com/codeuchay"
          className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
        >
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web11}
          />
          <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
            <p className="font-bold"> Github  </p>
            <span>  </span>
          </div>
        </a>
      </div>
    </section>
  );
}
