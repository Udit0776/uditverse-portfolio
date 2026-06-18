import { aboutData } from "@/data/about";

export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 md:p-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">
        {aboutData.headline}
      </h1>

      <p className="text-lg mb-8">
        {aboutData.introduction}
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-3">
            {aboutData.philosophy.title}
          </h2>

          <p>{aboutData.philosophy.content}</p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-3">
            Creative Edge
          </h2>

          <p>{aboutData.creativeEdge}</p>
        </div>
      </div>
    </main>
  );
}