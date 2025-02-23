"use client";

import { FiSearch } from "react-icons/fi";

export default function HeaderSearch() {
  return (
    <div className="relative">
      <FiSearch className="text-zinc-500 absolute top-[10px] left-[14px] text-lg" />
      <input
        type="text"
        placeholder="Search Spambo"
        className="w-64 py-2 pl-10 pr-[14px] rounded-full bg-zinc-100 dark:bg-zinc-800 dark:caret-zinc-500 border-none outline-none placeholder:text-zinc-500 dark:text-zinc-200"
      />
    </div>
  );
}
