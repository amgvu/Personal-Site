import Head from "next/head";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { FaSoundcloud, FaNode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiJavascript, SiPython, SiJava, SiHtml5, SiCss3, SiCsharp, SiCplusplus, SiReact, SiNodedotjs, SiTailwindcss } from "react-icons/si"
import ScrollingBanner from "../components/ScrollingBanner";
import AboutMe from "./aboutme";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>KEVIN VU</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <main
        className="
      bg-[#080808] px-4 md:px-8 lg:px-16 xl:px-24"
      >
        <section className="flex min-h-screen flex-grow flex-col place-content-center">
          <nav
            className="mb-8 flex justify-end py-4 md:py-8 text-gray-200"
          >
          <ScrollingBanner text="13.02 AMG FM: TREATMENT III" />            
            <h1 className="font-miracle text-xl"></h1>
            <ul className="flex items-center">
              <li>
                <button
                  className="delay-10 ml-4 md:ml-8 translate-y-1
                  rounded-full border-none 
                  bg-gray-700 
                  px-4 
                  py-2 
                  font-miracle 
                  text-white 
                  ease-in-out 
                  animate__fadeInRight 
                  animate__delay-1s 
                  animate__animated 
                  hover:scale-110 hover:bg-gray-200 hover:text-gray-900"
                >
                  Resume
                </button>
              </li>
            </ul>
          </nav>
          <div
            className="relative bottom-20 
          flex flex-grow flex-col place-content-center 
          p-10 
          py-10"
          >

            <h2
              className="py-2 font-miracle 
            text-5xl font-medium 
            text-gray-200 animate__fadeInDown 
            animate__animated dark:text-gray-100
            md:text-9xl"
            >
              Kevin Vu
            </h2>
            <h3
              className="py-2 font-miracle text-2xl 
            text-gray-400 animate__fadeInDown  
            animate__delay animate__animated
            md:text-5xl"
            >
              Full Stack Developer
            </h3>
            <p
              className="text-md max-w-xl py-5 
            font-monument leading-8 
            text-gray-200 animate__fadeInDown 
            animate__delay-1s animate__animated dark:text-gray-200
            md:text-xl"
            >
              Hey, thanks for stopping by. The background used to be cool and animated but it&apos;s looking bland at the moment :(
            </p>
            <div className="animate__fadeInDown animate__delay-1s animate__animated">
              <button
                className="delay-10 
              hover:transparent 
              flex-row gap-16 bg-transparent 
              p-3 py-3 
              text-5xl text-gray-100 transition 
              duration-200 
              ease-in-out hover:-translate-y-1 hover:scale-110 dark:text-gray-400"
              >
                <AiFillGithub
                  onClick={() => window.open("https://github.com/amgvu/")}
                />
              </button>
              <button
                className="delay-10 
              flex-row 
              gap-16 bg-transparent p-3 
              py-3 text-5xl 
              text-gray-100 transition duration-200 
              ease-in-out 
              hover:-translate-y-1 hover:scale-110 hover:bg-transparent dark:text-gray-400"
              >
                <AiFillLinkedin
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/kevin-vu-a8764b252/"
                    )
                  }
                />
              </button>
              <button
                className="delay-10 
              flex-row 
              gap-16 bg-transparent p-3 
              py-3 text-5xl 
              text-gray-100 transition duration-200 
              ease-in-out 
              hover:-translate-y-1 hover:scale-110 hover:bg-transparent dark:text-gray-400"
              
              >
                <MdEmail
                  onClick={() =>
                    window.open("mailto:kevinvu.amg@gmail.com")
                  }
                />
              </button>
              <button
                className="delay-10 
              flex-row 
              gap-16 bg-transparent p-3 
              py-3 text-5xl 
              text-gray-100 transition duration-200 
              ease-in-out 
              hover:-translate-y-1 hover:scale-110 hover:bg-transparent dark:text-gray-400"
              >
                <FaSoundcloud
                  onClick={() =>
                    window.open("https://soundcloud.com/kevinvuu")
                  }
                />
              </button>
            </div>
          </div>
        </section>
        <section className="text-center mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          <div>
            <h3
              className="py-1 font-miracle text-4xl md:text-4xl lg:text-5xl animate__fadeInUp animate__delay-3s animate__animated dark:text-white"
            >
              I&apos;m Kevin.
            </h3>
            <p
              className="text-xl md:text-1xl lg:text-2xl py-2 font-monument leading-8 text-gray-800 animate__fadeInUp animate__delay-3s animate__animated dark:text-gray-200"
            >
             Gonna write some corny stuff here
            </p>
          </div>
        </section>
        <section className="text-center">
          <div>
          <h3
              className="pt-6 pb-2 font-miracle text-4xl
            animate__fadeInUp animate__delay-3s animate__animated 
            dark:text-white"
            >
              Here&apos;s my toolbox,
          </h3>
            <p className="text-md space-x-4 flex flex-row justify-center py-6 font-monument 
          leading-8 text-gray-800 animate__fadeInUp 
          animate__delay-3s animate__animated 
          dark:text-gray-200">
              <SiJavascript className="text-5xl animate__fadeInUp animate__delay-3s animate__animated 
            dark:text-white">
            </SiJavascript>
              <SiJava className="text-5xl animate__fadeInUp animate__delay-3s animate__animated 
            dark:text-white"></SiJava>
              <SiCsharp className="text-5xl animate__fadeInUp animate__delay-3s animate__animated 
            dark:text-white"></SiCsharp>
              <SiPython className="text-5xl animate__fadeInUp animate__delay-3s animate__animated 
            dark:text-white"></SiPython>
              <SiCplusplus className="text-5xl animate__fadeInUp animate__delay-3s animate__animated 
            dark:text-white"></SiCplusplus>
            </p>
            <p className="text-md space-x-4 flex flex-row justify-center py-4 font-monument 
          leading-8 text-gray-800 animate__fadeInUp 
          animate__delay-3s animate__animated 
          dark:text-gray-200">
              <SiReact className="text-6xl animate__fadeInUp animate__delay-3s animate__animated 
            dark:text-white"></SiReact>
              <FaNode className="text-6xl animate__fadeInUp animate__delay-3s animate__animated 
            dark:text-white"></FaNode>
              <SiTailwindcss className="text-6xl animate__fadeInUp animate__delay-3s animate__animated 
            dark:text-white"></SiTailwindcss>
            </p>
            <p className="text-md py-2 font-monument 
          leading-8 text-gray-800 animate__fadeInUp 
          animate__delay-3s animate__animated 
          dark:text-gray-200">
            </p>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3
              className="py-1 text-sm 
          dark:text-white animate__fadeInUp 
          animate__delay-3s animate__animated 
          dark:text-gray-200"
            >
    
            </h3>
          </div>
        </section>
      </main>
    </div>
  );
}
