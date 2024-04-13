import Head from "next/head";
import Link from 'next/link';
import RadioComponent from "../components/RadioComponent";
import ThreeAnimation from "../components/ThreeAnimation";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { 
  AiFillLinkedin, 
  AiFillYoutube, 
  AiFillGithub 
} from "react-icons/ai";
import { 
  FaSoundcloud, 
  FaNode,
  FaPlay
} from "react-icons/fa";
import { 
  MdEmail 
} from "react-icons/md";
import { 
  SiJavascript, 
  SiPython, 
  SiJava, 
  SiHtml5, 
  SiCss3, 
  SiCsharp, 
  SiCplusplus, 
  SiReact, 
  SiNodedotjs, 
  SiTailwindcss 
} from "react-icons/si";

const socialIcons = [
  { icon: AiFillGithub, link: "https://github.com/amgvu/" },
  { icon: AiFillLinkedin, link: "https://www.linkedin.com/in/kevin-vu-a8764b252/" },
  { icon: MdEmail, link: "mailto:kevinvu.amg@gmail.com" },
  { icon: FaSoundcloud, link: "https://soundcloud.com/kevinvuu" }
];

const toolIcons = [
  SiJavascript, 
  SiJava, 
  SiCsharp, 
  SiPython, 
  SiCplusplus, 
  SiReact, 
  FaNode, 
  SiTailwindcss
];

const resumePdfPath = 'resumejune2023.pdf';

export default function Home() {
    const openResumePdf = () => {
    window.open(resumePdfPath, '_blank');
  };

  return (
    <div>
     <Head>
        <title>Kevin Vu</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </Head>
      <main className="bg-[#080808] px-4 md:px-8 lg:px-16 xl:px-32">
        <section className="flex min-h-screen flex-grow flex-col place-content-center">
          <nav className="mb-8 font-sans flex justify-end py-4 md:py-8 text-gray-200">
            <div className="ease-in-out animate__fadeIn animate__delay-1s animate__animated font-bold">
            <RadioComponent text="TREATMENT 130.2 FM" url="https://soundcloud.com/bassiani/a2-lucky-number-7-clip"/>
            </div>
            <h1 className="font-miracle text-xl"></h1>
            <ul className="flex items-center">
              <li>
                <button
                  className="delay-10 ml-4 md:ml-8 translate-y-1 rounded-xl border-none bg-[#101010] px-4 py-2 text-white ease-in-out transition duration-100 animate__fadeIn animate__delay-1s animate__animated hover:bg-white hover:text-[#101010] cursor-pointer" onClick={openResumePdf}>
                  Resume
                </button>
              </li>
            </ul>
          </nav>
          <div className="relative font-sans bottom-20 flex flex-grow flex-col place-content-center p-10 py-10">
              <div className="absolute right-10 
              top-40 duration-300 animate__fadeIn
              animate__delay-2s animate__animated">
            <ThreeAnimation />
            </div>
            <h2 className="py-2 text-5xl font-medium text-gray-200 animate__fadeIn animate__animated dark:text-gray-100 md:text-9xl">
              Kevin Vu
            </h2>
            <h3 className="py-2 text-2xl text-[#8A8A8A] animate__fadeIn animate__delay animate__animated md:text-5xl">
              Full Stack Developer
            </h3>
            <p className="text-md max-w-xl py-5 leading-8 text-[#8A8A8A] animate__fadeIn animate__delay-1s animate__animated dark:text-gray-200 md:text-xl">
              Hey, thanks for stopping by. The background used to be cool and animated but it&apos;s looking bland at the moment :(
            </p>
            <div className="animate__fadeIn animate__delay-1s animate__animated">
              {socialIcons.map((item, index) => (
                <button key={index} className="delay-10 flex-row gap-16 bg-transparent p-3 py-3 text-5xl text-[#8A8A8A] transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110" onClick={() => window.open(item.link)}>
                  <item.icon />
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className="text-center font-sans mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          <div>
            <h3 className="py-1 text-4xl md:text-4xl lg:text-5xl animate__fadeInUp animate__delay-3s animate__animated dark:text-white">
              I&apos;m Kevin.
            </h3>
            <p className="text-xl md:text-1xl lg:text-2xl py-2 leading-8 text-gray-800 animate__fadeInUp animate__delay-3s animate__animated dark:text-gray-200">
             Gonna write some corny stuff here
            </p>
          </div>
        </section>
        <section className="font-sans text-center">
          <div>
            <h3 className="pt-6 pb-2 text-4xl animate__fadeInUp animate__delay-3s animate__animated dark:text-white">
              Here&apos;s my toolbox,
            </h3>
            <p className="text-md space-x-4 flex flex-row justify-center py-6 leading-8 text-gray-800 animate__fadeInUp animate__delay-3s animate__animated dark:text-gray-200">
              {toolIcons.map((Icon, index) => (
                <Icon key={index} className="text-5xl animate__fadeInUp animate__delay-3s animate__animated dark:text-white" />
              ))}
            </p>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="py-1 text-sm dark:text-white animate__fadeInUp animate__delay-3s animate__animated dark:text-gray-200">
            </h3>
          </div>
        </section>
      </main>
    </div>
  );
}

