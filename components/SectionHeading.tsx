interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold mb-2">
        {title}
      </h1>

      {subtitle && (
        <p className="text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}