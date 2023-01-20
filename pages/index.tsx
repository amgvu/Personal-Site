import Head from "next/head";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { FaSoundcloud } from "react-icons/fa";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Image from "next/image";
import Pic from "C:/Users/mingl/Desktop/sebastian-leonhardt-PkWac9CLWVA-unsplash.jpg";

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
            <button
              onClick={() => window.open("https://www.twitch.tv/xqc")}
            >
              <Player
                className="hover:transparent absolute right-10 
              top-40 duration-300 animate__fadeIn
              animate__delay-2s animate__animated hover:-translate-y-1 hover:scale-105"
                src="https://assets2.lottiefiles.com/packages/lf20_bsMWmotRxl.json"
                background="transparent"
                style={{ height: "800px", width: "1000px" }}
                loop
                autoplay
              ></Player>
            </button>
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
                      ""
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
              products to customers overseas. I never went into software development out of passion for coding, but out of
              passion for creating and building things, reflected in my other hobbies like music production.
              My interest for development comes out of being able to create things with an external purpose, a mission that
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
            WIP
            </p>
            <p className="text-md py-2 font-monument 
          leading-8 text-gray-800 animate__fadeInUp 
          animate__delay-3s animate__animated 
          dark:text-gray-200">
              WIP
            </p>
          </div>
          <div>
            <h3
              className="py-1 font-miracle text-3xl 
            dark:text-white"
            >
              Projects
            </h3>
            <p
              className="text-md py-2 leading-8 text-gray-800 
            dark:text-gray-200"
            >
              1
            </p>
          </div>
          <div className="gap-10 lg:flex">
            <div
              className="my-10 
            flex-1 rounded-3xl p-10 
            text-center  
            shadow-2xl 
            dark:bg-transparent"
            >
              <h3
                className="pt-8 pb-2 text-lg 
              font-medium text-white  "
              >
                hello..
              </h3>
              <p
                className="py-1 
              text-white"
              >
                1
              </p>
              <h4
                className="py-1 
              text-gray-200"
              >
                1
              </h4>
              <p
                className="py-1 
              text-white"
              >
                1
              </p>
              <p
                className="py-1 
              text-white"
              >
                1
              </p>
              <p
                className="py-1 
              text-white"
              >
                1
              </p>
              <p
                className="py-1 
              text-white"
              >
                1
              </p>
            </div>
            <div
              className="my-10 flex-1 
            rounded-3xl p-10 text-center 
            text-white 
            shadow-2xl 
            dark:bg-transparent"
            >
              <h3
                className="pt-8 pb-2 text-lg 
              font-medium text-white "
              >
                hello..
              </h3>
              <p className="py-1">1</p>
              <h4
                className="py-1 
              text-gray-200"
              >
                1
              </h4>
              <p
                className="py-1 
              text-white"
              >
                1
              </p>
              <p
                className="py-1 
              text-white"
              >
                1
              </p>
              <p
                className="py-1 
              text-white"
              >
                1
              </p>
              <p
                className="py-1 
              text-white"
              >
                1
              </p>
            </div>
            <div
              className="my-10 flex-1 
            rounded-3xl p-10 text-center 
            text-white shadow-2xl
            dark:bg-transparent"
            >
              <h3
                className="pt-8 pb-2 text-lg 
              font-medium text-white "
              >
                hello..
              </h3>
              <p className="py-1">1</p>
              <h4
                className="py-1 
              text-gray-200"
              >
               1
              </h4>
              <p
                className="py-1 
              text-white"
              >
               1
              </p>
              <p
                className="py-1 
              text-white"
              >
               1
              </p>
              <p
                className="py-1 
              text-white"
              >
               1
              </p>
              <p
                className="py-1 
              text-white"
              >
               1
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3
              className="py-1 text-sm 
          dark:text-white"
            >
              This site was made with React & Tailwind. Here&apos;s the source <button onClick={() =>
                    window.open("https://i.redd.it/rqac4r1wwe771.jpg")
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
