import { socials } from "@/data/socials";

export default function ContactPage() {
  return (
    <main className="min-h-screen p-8 md:p-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">
        Contact
      </h1>

      <div className="space-y-6">
        <a
          href={`mailto:${socials.email}`}
          className="block border p-6 rounded-xl"
        >
          Email: {socials.email}
        </a>

        <a
          href={socials.github}
          target="_blank"
          className="block border p-6 rounded-xl"
        >
          GitHub
        </a>

        <a
          href={socials.linkedin}
          target="_blank"
          className="block border p-6 rounded-xl"
        >
          LinkedIn
        </a>
      </div>
    </main>
  );
}