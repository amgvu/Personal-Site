import Head from "next/head";
import { useState } from "react";
import {
  HeadContent,
  Navbar,
  Projects,
  RadioPlayer,
  VisualizerButton,
  AmbientBackground,
} from "../components/index";

export default function Home() {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  return (
    <div className="scrollbar-hide">
      <Head>
        <title>Kevin Vu | Software Engineer & Founder</title>
        <meta
          name="description"
          content="Personal portfolio of Kevin Vu, Full-stack Developer based in Houston, TX"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <main className="2xl:max-w-8xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:mx-auto">
        {isBackgroundVisible && <AmbientBackground />}

        <section className="flex min-h-screen flex-col">
          <div
            className={`invisible font-bold md:visible ${
              isBackgroundVisible ? "text-white" : "text-gray-800"
            } transition-colors`}
          >
            <RadioPlayer
              text="Now on air: Quelza @TheLotRadio 05-19-2025"
              url="https://youtu.be/4csOxZWoCcU?si=_SoNYFgDBgMhjz1F&t=2259"
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
