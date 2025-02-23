import HomeLeftContainer from "@/components/sub/client/HomeLeftContainer";

export default function page() {
  return (
    <div className="flex justify-between w-full">
      {/* Home left container */}
      <div className="w-80 h-full border-r border-zinc-100 dark:border-zinc-800 overflow-y-scroll">
        <HomeLeftContainer />
      </div>

      {/* Home feed container */}
      {/* Home right container */}
      <div className="w-80 h-full border-l border-zinc-100 dark:border-zinc-800 overflow-y-scroll">

      </div>
    </div>
  );
}
