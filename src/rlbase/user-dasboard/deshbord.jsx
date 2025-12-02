'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {FaPlus} from "react-icons/fa6";

const btns = [
  { name: "Applay for leave", link: "#" },
  { name: "LPI Goals", link: "#" },
  { name: "Take appraisal", link: "#" },
  { name: "View Payslip", link: "#" },
  { name: "Update Profilex", link: "#" },
  { name: "Events", link: "#" },
];
  const accordingData = [
  {
    title: "What is the main goal of human behavior research?",
    description:
      "Human behavior research aims to understand how people think, feel, and act in different situations by studying psychological, biological, and social factors.",
  },
  {
    title: "Why is ethical approval necessary in human research?",
    description:
      "Ethical approval ensures participant safety, protects personal data, and guarantees that research is conducted responsibly and without harm.",
  },
  {
    title: "What is the significance of observational studies?",
    description:
      "Observational studies allow researchers to examine natural human actions without interference, providing real-world insights into behavior patterns.",
  },
  {
    title: "How does environment influence human behavior?",
    description:
      "Environmental factors such as culture, family, education, and surroundings shape individual behavior, personality development, and decision-making.",
  },
  {
    title: "Why is participant consent important in research?",
    description:
      "Informed consent ensures participants understand the purpose, risks, and procedures of the study before agreeing to take part.",
  },
];
const according2Data = [
  {
    title: "What is cognitive research in human studies?",
    description:
      "Cognitive research explores how people learn, remember, solve problems, and process information, helping us understand mental functions.",
  },
  {
    title: "How does stress affect human health?",
    description:
      "Prolonged stress can impact physical and mental health, leading to weakened immunity, anxiety, depression, and reduced productivity.",
  },
  {
    title: "Why is sleep important for human cognition?",
    description:
      "Sleep plays a critical role in memory formation, emotional balance, and overall brain performance, supporting healthy cognitive functioning.",
  },
  {
    title: "What is the role of biological factors in human behavior?",
    description:
      "Biological factors such as genetics, hormones, and brain structure influence personality traits, emotions, and behavioral responses.",
  },
  {
    title: "How does physical activity impact mental well-being?",
    description:
      "Regular physical activity boosts mood, reduces stress, improves concentration, and supports long-term mental and emotional health.",
  },
];


function Deshbord() {
      const [bgAccording, setBgAccording] = useState(null);
      const [isPlusAccording, setIsPlusAccording] = useState(null);
      
    const handleBgAccording = (index) =>
        setBgAccording((prevIndex) => (prevIndex === index ? null : index));

   const handleBorderClick = (index) =>
  setIsPlusAccording((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="bg-blue-100 px-10  pb-10 min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-blue-500">
        <div className="max-w-6xl w-full mx-auto px-4 py-10 flex flex-col sm:flex-row justify-between items-center text-white gap-6">
          
          {/* Profile Info */}
          <div className="flex items-center gap-4">
            <Image
              src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Dashboard Image"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-lg"
            />

            <div>
              <h2 className="text-3xl font-bold">Jane Doe</h2>
              <p className="text-lg opacity-90">Web Developer</p>
            </div>
          </div>

          {/* Edit Button */}
          <button className="px-6 py-2 border-2 border-white rounded-lg text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
            Edit
          </button>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="max-w-6xl w-full mx-auto px-4 mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {btns.map((button, id) => (
            <Link key={id} href={button.link}>
              <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-400 cursor-pointer  focus:bg-red-300 transition-all duration-300 text-white font-medium rounded-lg shadow-md">
                {button.name}
              </button>
            </Link>
          ))}
        </div>
      </section>

      {/* accroding and progress area*/}
      <section className="flex bg-amber-100  p-10  justify-center mt-28 items-center gap-5 ">
   
            <div className="flex gap-3 flex-col w-full">
            {accordingData?.map((according, index) => (
                <article key={index} className="bg-[#e5eaf2] dark:bg-transparent rounded">
                    <div
                        className={`${bgAccording === index ? "rounded-t-sm" : "rounded"} flex gap-2 cursor-pointer items-center justify-between dark:bg-slate-800 border-green-300 outline-black border-2 w-full bg-gray-700 p-3`}
                        onClick={() => handleBgAccording(index)}
                    >
                        <h2
                            className={`dark:text-[#abc2d3] text-white font-[600] text-[1.2rem]`}
                        >
                            {according.title}
                        </h2>
                        <svg
                            className="dark:fill-[#abc2d3] fill-[#ffffff] shrink-0 ml-8"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                y="7"
                                width="16"
                                height="2"
                                rx="1"
                                className={`transform origin-center transition duration-200 ease-out ${
                                    bgAccording === index && "!rotate-180"
                                }`}
                            />
                            <rect
                                y="7"
                                width="16"
                                height="2"
                                rx="1"
                                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                                    bgAccording === index && "!rotate-180"
                                }`}
                            />
                        </svg>
                    </div>
                    <div
                        className={`grid transition-all duration-300 dark:bg-slate-900 overflow-hidden ease-in-out bg-gray-100 ${
                            bgAccording === index
                                ? "grid-rows-[1fr] opacity-100 px-3 py-3"
                                : "grid-rows-[0fr] opacity-0 px-3"
                        }`}
                    >
                        <div className="text-[#424242] dark:text-[#abc2d3] text-[0.9rem] overflow-hidden">
                            {according.description}
                        </div>
                    </div>
                </article>
            ))}
        </div>
     <div className="flex gap-3 flex-col w-full">
            {according2Data?.map((according, index) => (
                <article
                    key={index}
                    className="border dark:border-slate-700 border-gray-600 border-2 rounded p-3"
                >
                    <div
                        className="flex gap-2 cursor-pointer items-center justify-between w-full"
                        onClick={() => handleBorderClick(index)}
                    >
                        <h2 className="text-[#3B9DF8] font-[600] text-[1.2rem]">
                            {according.title}
                        </h2>
                        <p>
                            <FaPlus
                                className={`text-[1.3rem] dark:text-slate-600 text-text transition-all duration-300 ${
                                    isPlusAccording === index &&
                                    "rotate-[45deg] !text-[#3B9DF8]"
                                }`}
                            />
                        </p>
                    </div>
                    <div
                        className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                            isPlusAccording === index
                                ? "grid-rows-[1fr] opacity-100 mt-4"
                                : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                        <p className="text-[#424242] dark:text-[#abc2d3] text-[0.9rem] overflow-hidden">
                            {according.description}
                        </p>
                    </div>
                </article>
            ))}
        </div>



     
      </section>
    </div>
  );
}

export default Deshbord;






// react icons



   




