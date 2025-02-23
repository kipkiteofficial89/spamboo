import { useHide } from "@/hooks/useHide";
import { ShortCutItems } from "@/lib/Data";
import { ShortCutType } from "@/lib/Type";
import Image from "next/image";
import Link from "next/link";

export default function HomeShortcutsItems() {
  return (
    <div className="flex flex-col mt-3 gap-1">
      {ShortCutItems.map(
        ({ id, image, link, title, members, type }: ShortCutType) => {
          return (
            <Link
              href={link}
              className="flex items-center gap-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 p-3 rounded-md"
              key={id}
            >
              <Image
                height={40}
                width={40}
                src={image}
                alt="shortcut image"
                className="rounded-full h-[40px] w-[40px] object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="text-zinc-900 dark:text-zinc-200 text-sm font-medium">
                  {useHide(title)}
                </p>
                <span className="text-zinc-500 text-xs">{`${members} members . ${type}`}</span>
              </div>
            </Link>
          );
        }
      )}
    </div>
  );
}
