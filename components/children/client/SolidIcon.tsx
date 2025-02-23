"use client";

export default function SolidIcon({
  icon,
  name,
}: {
  icon: React.ReactElement;
  name?: string;
}) {
  return (
    <div className="grid place-content-center relative h-10 w-10 rounded-full dark:bg-zinc-800 bg-zinc-100 dark:text-zinc-200 text-zinc-900 dark:hover:bg-zinc-700 hover:bg-zinc-200 hover:cursor-pointer">
      <span className="text-lg">{icon}</span>
      <span className="h-[10px] w-[10px] bg-rose-600 rounded-full absolute right-0"></span>
    </div>
  );
}
