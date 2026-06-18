export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-sm text-zinc-400">
        <p>
          © {new Date().getFullYear()} Udit Sengar
        </p>

        <p>
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}