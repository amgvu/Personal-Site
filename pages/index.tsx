import Head from "next/head";
import { useState, useRef } from "react";
import { MdFileDownload } from "react-icons/md";
import { socialIcons } from "../types/socialData";
import RadioComponent from "../components/RadioComponent";
import AmbientBackground from "../components/AmbientBackground";
import VisualizerButton from "../components/VisualizerButton";
import ProjectCard from "../components/ProjectCard";
import HeadContent from "../components/page/HeadContent";

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
          <div className="animate__fadeIn animate__delay-1s animate__animated invisible font-bold ease-in-out sm:visible">
            {isBackgroundVisible && <AmbientBackground />}
            <RadioComponent
              text=" Now on air: Romanthony - Trust (Motor City Drum Ensemble Instrumental Dub)"
              url="https://youtu.be/rGXwifOFtEA?si=1aS5lI27-tlvb5Y8&t=121"
            />
          </div>
          <nav className="mb-12 flex justify-end py-10">
            <h1 className="text-xl"></h1>
            <div className="relative-hover relative" onMouseLeave={onLeave}>
              <div
                ref={hoverBoxRef}
                aria-hidden="true"
                className="hover-box rounded-6 absolute h-full rounded-md bg-neutral-900 transition-all duration-200"
              ></div>
              <ul className="relative z-20 flex">
                <li onMouseOver={onHover} className="flex">
                  <button
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="rounded-md px-4 py-2 font-medium tracking-wide text-neutral-100 transition-all duration-100 hover:text-white"
                  >
                    Projects
                  </button>
                </li>
                <li onMouseOver={onHover} className="ml-4 flex">
                  <button
                    onClick={openResumePdf}
                    className="rounded-md px-4 py-2 font-medium tracking-wide text-neutral-100 transition-all duration-100 hover:text-white"
                  >
                    Resume
                    <MdFileDownload className="ml-1 inline-block" />
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          <HeadContent />
        </section>
        <div
          id="projects"
          className="animate__fadeIn animate__delay-1s animate__animated mx-auto max-w-6xl px-4"
        >
          <h2 className="mt-6 py-3 text-center text-3xl font-semibold text-gray-200">
            Projects
          </h2>
          <p className="space-y-1 text-center text-xl font-light text-gray-300">
            Some of the stuff I&apos;ve built and contributed to
          </p>
          <section className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2">
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
            <p className="text-md animate__fadeInUp animate__delay-3s animate__animated flex flex-row justify-center space-x-4 py-6 leading-8 text-gray-800 dark:text-gray-200"></p>
          </div>
        </section>
      </main>
      <div className="invisible fixed bottom-0 right-0 z-50 sm:visible">
        <VisualizerButton
          isVisible={isBackgroundVisible}
          onToggle={() => setIsBackgroundVisible(!isBackgroundVisible)}
        />
      </div>
    </div>
  );
}
