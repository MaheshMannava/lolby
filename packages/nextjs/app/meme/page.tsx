"use client";

import { Suspense } from "react";
import Home from "@/components/home";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function MemePage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="app bg-[#b3b3b3]">
        <Home />
      </div>
    </Suspense>
  );
}
