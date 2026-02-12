"use client";

import { usePathname } from "next/navigation";
import SongulAssistant from "@/components/songul-assistant";

export default function ConditionalSongulAssistant() {
  const pathname = usePathname();

  if (pathname === "/farmasi-uyelik-formu") {
    return null;
  }

  return (
    <div className="hidden md:block">
      <SongulAssistant />
    </div>
  );
}
