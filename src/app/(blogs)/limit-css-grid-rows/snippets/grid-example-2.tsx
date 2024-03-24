"use client";

import { useMediaQuery } from "./use-media-query";

export default function Component() {
  const isMediumDevice = useMediaQuery("(min-width: 768px)");

  return (
    <div className="grid grid-cols-2 gap-1 md:grid-cols-3">
      {Array.from({ length: isMediumDevice ? 6 : 4 }, (_, i) => (
        <div key={i} className="bg-blue-600 p-4 text-zinc-50">
          Grid item {i + 1}
        </div>
      ))}
    </div>
  );
}
