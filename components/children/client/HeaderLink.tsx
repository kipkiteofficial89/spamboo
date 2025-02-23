"use client";

import { RegularIconType } from "@/lib/Type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderLinks } from "@/lib/MapItems";

export default function HeaderLink() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-8">
      {HeaderLinks.map((item: RegularIconType) => {
        return (
          <Link
            className={`text-[22px] h-12 w-12 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full active:bg-zinc-200 dark:active:bg-zinc-700 flex flex-col gap-1 justify-center items-center ${
              pathname === item.link ? "text-rose-600" : "dark:text-zinc-200"
            }`}
            key={item.id}
            href={item.link}
          >
            <span>{item.icon}</span>
            {pathname === item.link && (
              <span className="h-2 w-2 rounded-full bg-rose-600"></span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
