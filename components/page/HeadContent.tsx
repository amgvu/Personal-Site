import { socialIcons } from "../../types/socialData";

export default function HeadContent() {
  return (
    <div className="relative mt-5 flex flex-grow flex-col p-10 py-10 text-center sm:text-center md:mt-40">
      <h2 className="py-2 text-5xl font-semibold text-gray-200 md:text-9xl dark:text-gray-200">
        Kevin Vu
      </h2>
      <h3 className="py-2 text-2xl font-medium text-gray-300 md:text-5xl">
        Software Engineer & Founder
      </h3>
      <p className="text-md  py-5 text-[#8A8A8A] md:text-xl dark:text-gray-300">
        Hi! 👋 thanks for stopping by, I&apos;m a full-stack developer based in
        Houston, TX. I love all things tech and I also DJ sometimes.
      </p>
      <div className="items-center">
        {socialIcons.map((item, index) => (
          <button
            key={index}
            className="flex-row gap-16 bg-transparent p-2 py-3 text-5xl text-gray-100 transition duration-200 hover:text-zinc-400 sm:p-3"
            onClick={() => window.open(item.link)}
          >
            <item.icon />
          </button>
        ))}
      </div>
    </div>
  );
}
