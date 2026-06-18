import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 transition-all">
      <h2 className="text-2xl font-semibold mb-3">
        {project.title}
      </h2>

      <p className="text-zinc-400 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-zinc-800 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <span className="text-blue-400 text-sm">
        {project.status}
      </span>
    </div>
  );
}