import Image from "next/image";
import HeaderSearch from "../../children/client/HeaderSearch";
import SolidIcon from "../../children/client/SolidIcon";
import { SolidIconType } from "@/lib/Type";
import { FiPlus } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import HeaderLink from "../../children/client/HeaderLink";
import Link from "next/link";
import { SolidIcons } from "@/lib/MapItems";

export default function RootChildren({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header Container */}
      <div className="w-full h-[70px] flex justify-between items-center px-6 border-b border-zinc-100 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              height={40}
              width={40}
              alt="spamboo logo"
            />
          </Link>
          <HeaderSearch />
        </div>

        <HeaderLink />

        <div className="flex items-center gap-3">
          <button className="dark:bg-zinc-800 dark:text-zinc-200 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 flex items-center gap-[10px] py-2 px-4 rounded-full hover:cursor-pointer dark:hover:bg-zinc-700">
            <FiPlus className="text-lg" />
            <span>Create</span>
          </button>
          {SolidIcons.map((icon: SolidIconType) => (
            <SolidIcon key={icon.id} icon={icon.icon} name={icon.name} />
          ))}
          <div className="relative hover:cursor-pointer">
            <Image
              src={
                "https://i.pinimg.com/736x/83/b8/11/83b811c79d27c862b5c0c3217589fe0a.jpg"
              }
              height={40}
              width={40}
              className="rounded-full object-cover"
              alt="User profile picture"
            />
            <div className="absolute bottom-[0.5px] h-3 w-4 rounded-full right-0 bg-zinc-300 grid place-content-center">
              <FiChevronDown className="text-xs" />
            </div>
          </div>
        </div>
      </div>

      {/* Body Container */}
      <div className="flex w-full" style={{ height: "calc(100vh - 70px)" }}>
        {children}
      </div>
    </>
  );
}
