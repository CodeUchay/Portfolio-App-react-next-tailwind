import { HiChip, HiBadgeCheck } from "react-icons/hi";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "PL/SQL",
    "C# .NET CORE",
    "Java/Java EE",
  ];
  return (
    <section>
      <div className="flex flex-col text-center items-center justify-center mt-10 py-7">
        <HiChip className="text-teal-600 text-6xl mb-4" />
        <h1 className="text-teal-600 text-4xl mb-4">
          Skills &amp; Technologies
        </h1>
        <p className="text-center mb-9  dark:text-gray-200">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
          ipsa delectus eum quo voluptas aspernatur accusantium distinctio
          possimus est.
        </p>
      </div>
      <div className="text-lg my-5 leading-9 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 grid-rows-3 gap-12">
        {skills.map((skill) => (
          <div key={skills.id} className="rounded-lg  dark:text-gray-200 flex justify-center p-4 text-center bg-teal-600 items-center text-lg hover:text-white hover:shadow-lg hover:shadow-gray-500 hover:bg-teal-800 transition duration-500 ease-in-out">
            <HiBadgeCheck
              className="w-6 h-6 flex-shrink-0 mr-2 hover:text-white"
              viewBox="0 0 24 24"
            />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
