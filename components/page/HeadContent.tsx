import { socialIcons } from "../../types/socialData";

export default function HeadContent() {
  return (
    <div className="flex h-screen flex-col items-center justify-start px-4 pt-20 text-center sm:pt-24 md:pt-44">
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-semibold text-gray-200 sm:text-5xl md:text-6xl lg:text-9xl dark:text-gray-200">
          Kevin Vu
        </h2>
        <h3 className="mt-2 text-xl font-medium text-gray-300 sm:text-2xl md:text-5xl lg:mt-4">
          Software Engineer & Founder
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-[#8A8A8A] sm:text-base md:text-2xl lg:mt-6 dark:text-gray-300">
          Hi! 👋 thanks for stopping by, I&apos;m a full-stack developer based
          in Houston, TX. I love all things tech and I also DJ sometimes.
        </p>
        <div className="mt-6 flex justify-center gap-4 sm:mt-8 sm:gap-6">
          {socialIcons.map((item, index) => (
            <button
              key={index}
              className="text-3xl text-gray-100 transition duration-200 hover:text-zinc-400 sm:text-5xl"
              onClick={() => window.open(item.link)}
            >
              <item.icon />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
