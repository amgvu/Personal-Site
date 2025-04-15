import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import RadioComponent from "../components/RadioComponent";
import EmailForm from "../components/EmailForm";
import AmbientBackground from "../components/AmbientBackground";
import VisualizerButton from "../components/VisualizerButton";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaSoundcloud, FaDiscord, FaNode, FaPlay } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";

const socialIcons = [
  { icon: AiFillGithub, link: "https://github.com/amgvu/", title: "GitHub" },
  {
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/kevinvu-dev/",
    title: "Linkedin",
  },
  {
    icon: FaDiscord,
    link: "https://discord.com/users/216339214978121728",
    title: "Discord",
  },
  {
    icon: FaSoundcloud,
    link: "https://soundcloud.com/kevinvuu",
    title: "Soundcloud",
  },
];

const resumePdfPath = "KevinVu_SoftwareEngineer_Resume.pdf";

export default function Home() {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  const openResumePdf = () => {
    window.open(resumePdfPath, "_blank");
  };
  return (
    <div className="scrollbar-hide">
      <Head>
        <title>Kevin Vu | Portfolio</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <main className="px-4 md:px-8 lg:px-16 xl:px-32">
        <section className="flex min-h-screen flex-grow flex-col place-content-center">
          <div className="ease-in-out animate__fadeIn animate__delay-1s animate__animated font-bold invisible sm:visible">
            {isBackgroundVisible && <AmbientBackground />}
            <RadioComponent
              text="Now on air: Ryan Elliot - Boiler Room Berlin"
              url="https://youtu.be/9ukQXQypilc?si=e9QdDirI8yKQhR29&t=4117"
            />
          </div>
          <nav className="mb-12 flex justify-end py-10 text-gray-200">
            <h1 className="text-xl"></h1>
            <ul className="flex items-center">
              <li>
                <motion.button
                  className="px-6 py-2 rounded-md relative radial-gradient ease-in-out animate__fadeIn animate__delay-1s animate__animated"
                  initial={{ "--x": "100%", scale: 1 } as any}
                  animate={{ "--x": "-100%" } as any}
                  whileTap={{ scale: 0.97 }}
                  transition={{
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
                    },
                  }}
                  onClick={openResumePdf}
                >
                  <span
                    className="text-neutral-100 tracking-wide font-light
                                  h-full w-full block relative linear-mask"
                  >
                    Resume
                  </span>
                  <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                </motion.button>
              </li>
            </ul>
          </nav>
          <div className="relative bottom-20 flex flex-grow flex-col place-content-center p-10 py-10 text-center sm:text-center">
            <div
              className="absolute top-7 left-1 duration-300 animate__fadeIn
              animate__delay-2s animate__animated visible sm:invisible"
            ></div>
            <div
              className="absolute right-2 top-[-90px] bottom-10 flex justify-center items-center h-screen w-full"
              style={{ zIndex: 0, pointerEvents: "none" }}
            >
              <div className="duration-300 animate__fadeIn animate__delay-2s animate__animated invisible sm:visible"></div>
            </div>
            <h2 className="py-2 text-5xl font-semibold text-gray-200 animate__fadeIn animate__animated dark:text-gray-200 md:text-9xl">
              Kevin Vu
            </h2>
            <h3 className="py-2 text-2xl font-medium text-gray-300 animate__fadeIn animate__delay animate__animated md:text-5xl">
              Software Developer
            </h3>
            <p className="text-md py-5 text-[#8A8A8A] animate__fadeIn animate__delay-1s animate__animated dark:text-gray-300 md:text-xl">
              Hi! 👋 thanks for stopping by, I&apos;m a full-stack developer
              based in Houston, TX. I love all things tech and I also DJ.
            </p>
            <div className="animate__fadeIn animate__delay-1s animate__animated">
              {socialIcons.map((item, index) => (
                <button
                  key={index}
                  className="delay-10 flex-row gap-16 bg-transparent p-2 sm:p-3 py-3 text-5xl text-gray-100 transition duration-100 ease-in-out hover:-translate-y-1"
                  onClick={() => window.open(item.link)}
                >
                  <item.icon />
                </button>
              ))}
            </div>
          </div>
          <div className="my-3 text-gray-200 grid grid-cols-1 justify-center"></div>
        </section>
        <div className="max-w-6xl animate__fadeIn animate__delay-1s animate__animated mx-auto px-4">
          <h2 className="text-3xl py-3 mt-6 font-semibold text-center text-gray-200">
            Projects
          </h2>
          <p className="text-center text-xl text-gray-300 font-light space-y-1">
            These are some of the projects I&apos;ve built and contributed to.
            Click on a card to learn more.
          </p>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
            <ProjectCard
              title="Worble"
              description="Lightweight Discord backend service for ArcForge dashboard"
              link="https://github.com/amgvu/Worble"
            />
            <ProjectCard
              title="ArcForge"
              description="Discord nicknames and roles management application"
              link="https://github.com/amgvu/ArcForge"
            />
            <ProjectCard
              title="ShopSentry"
              description="Python web scraper bot that checks if a product is in stock"
              link="https://github.com/amgvu/ShopSentry"
            />
            <ProjectCard
              title="HawkHacks/Landing"
              description="The front page of HawkHacks 2024"
              link="https://hawkhacks.ca/"
            />
            <ProjectCard
              title="HawkHacks/Dashboard"
              description="The application dashboard for hackers and mentors"
              link="https://portal.hawkhacks.ca/login?from=/"
            />
            <ProjectCard
              title="Personal Site"
              description="Like the site? You can find the code here as well as setup instructions"
              link="https://github.com/amgvu/Personal-Site"
            />
          </section>
        </div>
        <section className="text-center">
          <div>
            <p className="text-md space-x-4 flex flex-row justify-center py-6 leading-8 text-gray-800 animate__fadeInUp animate__delay-3s animate__animated dark:text-gray-200"></p>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-sm dark:text-white animate__fadeIn animate__delay-1s animate__animated">
              <EmailForm />
            </h3>
          </div>
        </section>
      </main>
      <div className="fixed bottom-0 right-0 z-50 invisible sm:visible">
        <VisualizerButton
          isVisible={isBackgroundVisible}
          onToggle={() => setIsBackgroundVisible(!isBackgroundVisible)}
        />
      </div>
    </div>
  );
}
