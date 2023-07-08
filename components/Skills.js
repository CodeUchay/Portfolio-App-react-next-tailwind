import { HiChip, HiBadgeCheck } from "react-icons/hi";
import skills from '../data/skills'

export default function Skills() {
  return (
    <section>
      <div className="flex flex-col text-center items-center justify-center mt-10 py-7">
        <HiChip className="text-teal-600 text-6xl mb-4" />
        <h1 className="text-teal-600 text-4xl mb-4">
          Skills &amp; Technologies
        </h1>
        <p className="text-center mb-7 text-md dark:text-gray-200">
          The following are my skills as a <span className="text-teal-500">Web developer </span> and a <span className="text-teal-500">Software Engineer </span>
        </p>
      </div>
      <div className="text-lg my-5 leading-9 text-white grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 grid-rows-3 gap-12">
        {skills.map((skill) => (
          <div key={skill.id} className="rounded-lg flex justify-center p-4 text-center bg-teal-600 items-center text-lg hover:text-white hover:shadow-lg hover:shadow-gray-500 hover:bg-teal-800 transition duration-500 ease-in-out">
            <HiBadgeCheck
              className="w-6 h-6 flex-shrink-0 mr-2 hover:text-white"
              viewBox="0 0 24 24"
            /> 
            <span >{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
