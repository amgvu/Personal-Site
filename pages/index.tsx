import Head from "next/head";
import Link from 'next/link';
import { motion } from "framer-motion"
import RadioComponent from "../components/RadioComponent";
import ThreeAnimation from "../components/ThreeAnimation";
import EmailForm from "../components/EmailForm";
import ThreeAnimationMobile from "../components/ThreeAnimationMobile";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { 
  AiFillLinkedin, 
  AiFillYoutube, 
  AiFillGithub 
} from "react-icons/ai";
import { 
  FaSoundcloud,
  FaDiscord,
  FaNode,
  FaPlay
} from "react-icons/fa";

const socialIcons = [
  { icon: AiFillGithub, link: "https://github.com/amgvu/" },
  { icon: AiFillLinkedin, link: "https://www.linkedin.com/in/kevin-vu-a8764b252/" },
  { icon: FaDiscord, link: "https://discord.com/users/216339214978121728"},
  { icon: FaSoundcloud, link: "https://soundcloud.com/kevinvuu" }
];

const resumePdfPath = 'resumejune2023.pdf';

export default function Home() {
    const openResumePdf = () => {
    window.open(resumePdfPath, '_blank');
  };

  return (
    <div>
     <Head>
        <title>Kevin Vu | Portfolio</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </Head>
      <main className="bg-[#000000] px-4 md:px-8 lg:px-16 xl:px-32">
        <section className="flex min-h-screen flex-grow flex-col place-content-center">
            <div className="ease-in-out animate__fadeIn animate__delay-1s animate__animated font-bold invisible sm:visible">
            <RadioComponent text="Now on air: Kevin Vu - TREATMENT III" url="https://soundcloud.com/kevinvuu/treatment-iii"/>
            </div>
          <nav className="mb-12 font-sans flex justify-end py-10 text-gray-200">
            <h1 className="text-xl"></h1>
            <ul className="flex items-center">
              <li>
                <motion.button
                    className="px-6 py-2 rounded-md relative radial-gradient ease-in-out animate__fadeIn animate__delay-1s animate__animated" initial={{ "--x": "100%", scale: 1 } as any} animate={{ "--x": "-100%" }as any} whileTap={{ scale: 0.97 }} transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 1,
                        type: "spring",
                        stiffness: 20,
                        damping: 15,
                        mass: 2,
                        scale: {
                          type: "spring",
                          stiffness: 10,
                          damping: 5,
                          mass: 0.1,
                      }
                    }} onClick={openResumePdf}>
                  <span className="text-neutral-100 tracking-wide font-light
                                  h-full w-full block relative linear-mask">
                    Resume
                  </span>
                  <span className="block absolute inset-0 rounded-md p-px linear-overlay"/>
                </motion.button>
              </li>
            </ul>
          </nav>
          <div className="relative font-sans bottom-20 flex flex-grow flex-col place-content-center p-10 py-10 text-center sm:text-left">
            <div className="absolute top-7 left-1 duration-300 animate__fadeIn
              animate__delay-2s animate__animated visible sm:invisible">
              <ThreeAnimationMobile />
            </div>
              <div className="absolute right-10 
              top-40 duration-300 animate__fadeIn
              animate__delay-2s animate__animated invisible sm:visible">
            <ThreeAnimation />
            </div>
            <h2 className="py-2 text-5xl font-semibold text-gray-200 animate__fadeIn animate__animated dark:text-gray-100 md:text-9xl">
              Kevin Vu
            </h2>
            <h3 className="py-2 text-2xl font-medium text-[#8A8A8A] animate__fadeIn animate__delay animate__animated md:text-5xl">
              Full Stack Developer
            </h3>
            <p className="text-md max-w-xl py-5 leading-8 text-[#8A8A8A] animate__fadeIn animate__delay-1s animate__animated dark:text-gray-200 md:text-xl">
              Hey, thanks for stopping by. I&apos;m a developer and techno artist out of Houston, TX
            </p>
            <div className="animate__fadeIn animate__delay-1s animate__animated">
              {socialIcons.map((item, index) => (
                <button key={index} className="delay-10 flex-row gap-16 bg-transparent p-2 sm:p-3 py-3 text-5xl text-white transition duration-100 ease-in-out hover:-translate-y-1" onClick={() => window.open(item.link)}>
                  <item.icon />
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className="font-sans text-center">
          <div>
            <p className="text-md space-x-4 flex flex-row justify-center py-6 leading-8 text-gray-800 animate__fadeInUp animate__delay-3s animate__animated dark:text-gray-200">
            </p>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="py-1 text-sm dark:text-white animate__fadeIn animate__delay-1s animate__animated">
            <EmailForm />
            </h3>
          </div>
        </section>
      </main>
    </div>
  );
}

