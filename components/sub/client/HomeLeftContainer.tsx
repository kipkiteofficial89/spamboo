"use client";

import HomeShortcutsItems from "@/components/children/server/HomeShortcutsItems";
import { HomeLeftContainerIcons } from "@/lib/MapItems";
import { ColorIconType } from "@/lib/Type";
import Link from "next/link";

export default function HomeLeftContainer() {
  return (
    <>
      <div className="flex flex-col gap-3 p-3 border-b dark:border-zinc-800 border-zinc-100">
        {HomeLeftContainerIcons.map(
          ({ id, link, icon, title }: ColorIconType) => {
            return (
              <Link
                href={link}
                key={id}
                className="flex items-center gap-4 p-3 rounded-md dark:hover:bg-zinc-800 hover:bg-zinc-100"
              >
                <span className="text-2xl text-zinc-500">{icon}</span>
                <p className="text-md dark:text-zinc-200 text-zinc-900 font-medium">
                  {title}
                </p>
              </Link>
            );
          }
        )}
      </div>

      <div className="py-6 px-3">
        <div className="flex items-center justify-between px-3">
          <p className="text-md text-zinc-500 font-medium">Your shortcuts</p>
          <span className="py-1 px-3 rounded-full text-sm text-zinc-900 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800">
            12
          </span>
        </div>
        <HomeShortcutsItems />
      </div>
    </>
  );
}
