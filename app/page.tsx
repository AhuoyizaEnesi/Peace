import About from "@/app/components/About";
import Hero from "@/app/components/Hero";
import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/app/data/projects";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1200px] px-4 py-8 md:py-12">
      <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-8 md:gap-12">
        <Hero />
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
        <About />
      </div>
    </main>
  );
}
