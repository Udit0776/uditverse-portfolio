import SkillSection from "@/components/SkillSection";
import { skills } from "@/data/skills";

export default function SkillsPage() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <h1 className="text-4xl font-bold mb-10">Skills</h1>

      <SkillSection title="Frontend" skills={skills.frontend} />

      <SkillSection title="Backend" skills={skills.backend} />

      <SkillSection title="Database" skills={skills.database} />

      <SkillSection title="Tools" skills={skills.tools} />
    </main>
  );
}
