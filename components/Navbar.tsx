import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-white"
        >
          UditVerse
        </Link>

        <div className="flex gap-6 text-sm text-zinc-300">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}