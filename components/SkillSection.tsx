interface SkillSectionProps {
  title: string;
  skills: string[];
}

export default function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold capitalize mb-4">{title}</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full border border-zinc-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
