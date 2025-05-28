import Head from "next/head";
import { useState, useRef } from "react";
import { AiFillLinkedin, AiFillGithub, } from "react-icons/ai";
import { MdFileDownload } from "react-icons/md";
import { FaSoundcloud, FaDiscord } from "react-icons/fa";
import RadioComponent from "../components/RadioComponent";
import AmbientBackground from "../components/AmbientBackground";
import VisualizerButton from "../components/VisualizerButton";
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
  const hoverBoxRef = useRef<HTMLDivElement>(null);

  const onHover = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const { offsetLeft, offsetWidth } = e.currentTarget;
    if (hoverBoxRef.current) {
      hoverBoxRef.current.style.transform = `translateX(${offsetLeft}px)`;
      hoverBoxRef.current.style.width = offsetWidth + "px";
    }
  };

  const onLeave = () => {
    if (hoverBoxRef.current) {
      hoverBoxRef.current.style.width = "0px";
    }
  };

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
              text=" Now on air: Romanthony - Trust (Motor City Drum Ensemble Instrumental Dub)"
              url="https://youtu.be/rGXwifOFtEA?si=1aS5lI27-tlvb5Y8&t=121"
            />
          </div>
          <nav className="mb-12 flex justify-end py-10">
            <h1 className="text-xl"></h1>
            <div
              className="relative relative-hover"
              onMouseLeave={onLeave}
            >
              <div
                ref={hoverBoxRef}
                aria-hidden="true"
                className="hover-box absolute h-full rounded-6 bg-neutral-900 rounded-md transition-all duration-200"
              ></div>
              <ul className="flex relative z-20">
                <li onMouseOver={onHover} className="flex">
                  <button
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="px-4 py-2 text-neutral-100 tracking-wide font-medium hover:text-white rounded-md transition-all duration-100"
                  >
                    Projects
                  </button>
                </li>
                <li onMouseOver={onHover} className="flex ml-4">
                  <button
                    onClick={openResumePdf}
                    className="px-4 py-2 text-neutral-100 tracking-wide font-medium hover:text-white rounded-md transition-all duration-100"
                  >
                    Resume
                    <MdFileDownload className="inline-block ml-1" />
                  </button>
                </li>
              </ul>
            </div>
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
              Software Engineer & Founder
            </h3>
            <p className="text-md py-5 text-[#8A8A8A] animate__fadeIn animate__delay-1s animate__animated dark:text-gray-300 md:text-xl">
              Hi! 👋 thanks for stopping by, I&apos;m a full-stack developer
              based in Houston, TX. I love all things tech and I also DJ sometimes.
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
        <div
          id="projects"
          className="max-w-6xl animate__fadeIn animate__delay-1s animate__animated mx-auto px-4"
        >
          <h2 className="text-3xl py-3 mt-6 font-semibold text-center text-gray-200">
            Projects
          </h2>
          <p className="text-center text-xl text-gray-300 font-light space-y-1">
            Some of the stuff I&apos;ve built and contributed to
          </p>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
            <ProjectCard
              title="Arclify"
              description="Discord nicknames management, but fun."
              link="https://arclify.vercel.app/"
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
              title="ShopSentry"
              description="Python web scraper bot that checks if a product is in stock"
              link="https://github.com/amgvu/ShopSentry"
            />
            <ProjectCard
              title="Personal Site"
              description="This site :D"
              link="https://github.com/amgvu/Personal-Site"
            />
          </section>
        </div>
        <section className="text-center">
          <div>
            <p className="text-md space-x-4 flex flex-row justify-center py-6 leading-8 text-gray-800 animate__fadeInUp animate__delay-3s animate__animated dark:text-gray-200"></p>
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
