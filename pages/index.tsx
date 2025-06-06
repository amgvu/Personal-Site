import Head from "next/head";
import { useState, useRef } from "react";
import { MdFileDownload } from "react-icons/md";
import RadioComponent from "../components/RadioComponent";
import AmbientBackground from "../components/AmbientBackground";
import VisualizerButton from "../components/VisualizerButton";
import HeadContent from "../components/page/HeadContent";
import Navbar from "../components/page/Navbar";
import Projects from "../components/page/Projects";

export default function Home() {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

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
          <Navbar />
          <HeadContent />
        </section>
        <Projects />
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
