import Head from "next/head";
import { useState } from "react";

import RadioComponent from "../components/MusicDanceExperience/RadioPlayer/RadioComponent";
import AmbientBackground from "../components/MusicDanceExperience/AmbientBackground";
import VisualizerButton from "../components/MusicDanceExperience/VisualizerButton";
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
          <div className="font-bold sm:visible">
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

        <VisualizerButton
          isVisible={isBackgroundVisible}
          onToggle={() => setIsBackgroundVisible(!isBackgroundVisible)}
        />
      </main>
    </div>
  );
}
