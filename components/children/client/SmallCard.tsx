"use client";

export default function SmallCard({
  icon,
  title,
}: {
  icon: React.ReactElement;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <>{icon}</>
      <p className="font-medium text-zinc-900 dark:text-zinc-200">{title}</p>
    </div>
  );
}
