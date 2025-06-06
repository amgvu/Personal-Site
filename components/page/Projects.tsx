import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
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
  );
}
