import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
