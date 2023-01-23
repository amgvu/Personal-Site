import Head from "next/head";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { FaSoundcloud } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Head>
        <title>amgcodes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="
      animate-text bg-gray-600 from-gray-700 via-black to-gray-800 px-10 
      dark:bg-gradient-to-br md:px-20 lg:px-40"
      >
        <section className="flex min-h-screen flex-grow flex-col place-content-center">
          <nav
            className="mb-12 flex justify-end py-10 
          text-gray-200"
          >
            <h1 className="font-miracle text-xl"></h1>
            <ul className="flex items-center">
              <li>
                <button
                  onClick={() =>
                    window.open("https://www.twitch.tv/xqc")
                  }
                  className="delay-10 ml-8 -translate-y-1 
                  rounded-full border-none 
                  bg-gray-700 
                  px-4 
                  py-2 
                  font-miracle 
                  text-white 
                  transition duration-500 ease-in-out animate__fadeInRight animate__delay-1s animate__animated hover:scale-110 hover:bg-gray-200 hover:text-gray-900"
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
              <Player
                className="hover:transparent absolute right-10 
              top-40 duration-300 animate__fadeIn
              animate__delay-2s animate__animated"
                src="https://assets10.lottiefiles.com/packages/lf20_qCRZE6vIiZ.json"
                background="transparent"
                style={{ height: "800px", width: "1000px" }}
                loop
                autoplay
              ></Player>
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
              Developer & Student
            </h3>
            <p
              className="text-md max-w-xl py-5 
            font-monument leading-8 
            text-gray-200 animate__fadeInDown 
            animate__delay-1s animate__animated dark:text-gray-200
            md:text-xl"
            >
              Hi, I&apos;m a guy from Houston who enjoys creating. Check me out
              below.
            </p>
            <div className="animate__fadeInDown animate__delay-1s animate__animated">
              <button
                className="delay-10 
              hover:transparent 
              flex-row gap-16 bg-transparent 
              p-3 py-3 
              text-5xl text-gray-100 transition 
              duration-300 
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
              text-gray-100 transition duration-300 
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
              text-gray-100 transition duration-300 
              ease-in-out 
              hover:-translate-y-1 hover:scale-110 hover:bg-transparent dark:text-gray-400"
              >
                <AiFillYoutube
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/channel/UCoqitvf9ipAlp5IR6ZvYukg/"
                    )
                  }
                />
              </button>
              <button
                className="delay-10 
              flex-row 
              gap-16 bg-transparent p-3 
              py-3 text-5xl 
              text-gray-100 transition duration-300 
              ease-in-out 
              hover:-translate-y-1 hover:scale-110 hover:bg-transparent dark:text-gray-400"
              >
                <FaSoundcloud
                  onClick={() =>
                    window.open("https://soundcloud.com/user-581800726/")
                  }
                />
              </button>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3
              className="py-1 font-miracle text-3xl 
          animate__fadeInUp animate__delay-3s animate__animated 
          dark:text-white"
            >
              I&apos;m Kevin.
            </h3>
            <p
              className="text-md py-2 font-monument 
          leading-8 text-gray-800 animate__fadeInUp 
          animate__delay-3s animate__animated 
          dark:text-gray-200"
            >
             I&apos;m a full-stack developer who started my journey, when I built my first eCommerce store selling
              clothes made by talented fashion designers in East Asia, who didn&apos;t have reliable methods to sell their
              products to customers overseas. My enjoyment for software development never came out of passion for coding, but out of
              passion for creating and building things, reflected in my other hobbies like music production.
              It comes out of being able to create things with an external purpose, a mission that
              exceeds myself and lets others share the experience of what I craft.
 
            </p>
          </div>
        </section>
        <section>
          <div>
          <h3
              className="py-1 font-miracle text-3xl
            animate__fadeInUp animate__delay-3s animate__animated 
            dark:text-white"
            >
              My skills and technologies.
          </h3>
            <p className="text-md py-2 font-monument 
          leading-8 text-gray-800 animate__fadeInUp 
          animate__delay-3s animate__animated 
          dark:text-gray-200">
              C#, C++, HTML/CSS, Java, JavaScript, Python
            </p>
            <p className="text-md py-2 font-monument 
          leading-8 text-gray-800 animate__fadeInUp 
          animate__delay-3s animate__animated 
          dark:text-gray-200">
              React, Node, Tailwind, Juce
            </p>
          </div>
          <h3 className="mb-20 mt-32 gap-10 text-5xl text-center py-2 font-monument 
          leading-8 animate__fadeInUp 
          animate__delay-3s animate__animated 
          dark:text-gray-200">
            The rest of this site is currently a work in progress.
            <p className="text-3xl py-8 leading-8">
              Follow the development at my <button onClick={() =>
                    window.open("https://github.com/amgvu/Personal-Site")
                  }>
                <span className="hover:underline underline-offset-2">
                GitHub repository :)
                </span>
              </button>
            </p>
          </h3>
        </section>
        <section className="py-10">
          <div>
            <h3
              className="py-1 text-sm 
          dark:text-white animate__fadeInUp 
          animate__delay-3s animate__animated 
          dark:text-gray-200"
            >
              This site was made with NextJS & Tailwind. Here&apos;s the source <button onClick={() =>
                    window.open("https://github.com/amgvu/Personal-Site")
                  }>
                <span className="hover:underline underline-offset-2">
                  code
                </span>
              </button>
            </h3>
          </div>
        </section>
      </main>
    </div>
  );
}
