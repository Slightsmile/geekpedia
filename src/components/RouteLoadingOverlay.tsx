"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MIN_VISIBLE_MS = 900;

export function RouteLoadingOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), MIN_VISIBLE_MS);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center gap-5 bg-bg transition-opacity duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <Image
        src="/logo.png"
        alt=""
        width={72}
        height={72}
        className="h-16 w-16 animate-logo-pulse sm:h-18 sm:w-18"
        priority
      />
      <p className="font-display text-2xl tracking-wide text-text">
        GEEK<span className="text-[#ed1d24]">PEDIA</span>
      </p>
      <div className="flex gap-1.5" aria-hidden>
        <span className="h-1.5 w-1.5 animate-loading-dot rounded-full bg-text-dim" style={{ animationDelay: "0ms" }} />
        <span className="h-1.5 w-1.5 animate-loading-dot rounded-full bg-text-dim" style={{ animationDelay: "160ms" }} />
        <span className="h-1.5 w-1.5 animate-loading-dot rounded-full bg-text-dim" style={{ animationDelay: "320ms" }} />
      </div>
    </div>
  );
}
