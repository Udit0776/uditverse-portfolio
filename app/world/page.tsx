"use client";

import dynamic from "next/dynamic";

const GameCanvas = dynamic(() => import("@/components/GameCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-full items-center justify-center bg-zinc-950 text-white">
      <div className="text-xl">Loading World...</div>
    </div>
  ),
});

export default function WorldPage() {
  return <GameCanvas />;
}
