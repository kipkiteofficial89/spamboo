import type { Metadata } from "next";
import "./globals.css";
import RootChildren from "@/components/main/server/RootChildren";
import { poppins } from "@/lib/Fonts";

export const metadata: Metadata = {
  title: "Spamboo",
  description: "A social network for connecting peoples worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className} bg-white dark:bg-zinc-900`}>
        <RootChildren>{children}</RootChildren>
      </body>
    </html>
  );
}
