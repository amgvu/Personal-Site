import Head from 'next/head'
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { FaSoundcloud, FaNode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiJavascript, SiPython, SiJava, SiHtml5, SiCss3, SiCsharp, SiCplusplus, SiReact, SiNodedotjs, SiTailwindcss } from "react-icons/si"
import { serialize } from "v8";

export default function FirstPost() {
    return     <div>
    <Head>
      <title>Kevin Vu</title>
      <link rel="icon" href="/favicon/favicon.ico" />
    </Head>
    <main
      className="
    animate-text bg-gray-600 from-gray-700 via-black to-gray-800 px-10 
    dark:bg-gradient-to-br md:px-20 lg:px-40"
    >
      <section className="flex min-h-screen flex-grow text-center mx-80">
        <nav
          className="flex justify-center py-10 
        text-gray-200"
        >
          <h1 className="font-miracle text-xl"></h1>
          <ul className="flex items-center">
          </ul>
        </nav>
        <div
          className="relative
        flex flex-grow flex-col py-40"
        >
          <h2
            className="py-2 font-miracle 
          text-5xl font-medium  
          text-gray-200 animate__fadeInLeft 
          animate__animated dark:text-gray-100
          md:text-9xl"
          >
            Fun things
          </h2>
          <p
            className="text-md py-5 
          font-monument leading-8 
          text-gray-200 animate__fadeInRight
          animate__delay-1s animate__animated dark:text-gray-200
          md:text-xl"
          >
            Things you probably don&apos;t care about but here they are
          </p>
          <p className="text-md py-5 
          font-monument leading-8 
          text-gray-200 animate__fadeInDown 
          animate__delay-1s animate__animated dark:text-gray-200
          md:text-xl"></p>
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
            This site was made with React & Tailwind.
          </h3>
        </div>
      </section>
    </main>
  </div>;
  }