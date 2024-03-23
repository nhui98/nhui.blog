"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useMediaQuery } from "@/hooks/use-media-query";

export function CodeOutputVizualizer({
  children,
  resizable,
  caption,
}: {
  children: React.ReactNode;
  resizable?: boolean;
  caption?: string;
}) {
  const isMedium = useMediaQuery("(min-width: 768px)");
  const size = !isMedium || !resizable ? 100 : 95;

  return (
    <figure>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={size} maxSize={size}>
          {children}
        </ResizablePanel>
        {resizable && (
          <ResizableHandle className="hidden translate-x-4 bg-transparent md:flex dark:bg-transparent">
            <div className="z-10 flex h-8 w-2 items-center justify-center rounded-full bg-gray-700">
              <div className="size-2.5" />
            </div>
          </ResizableHandle>
        )}

        <ResizablePanel defaultSize={100 - size} minSize={100 - size} />
      </ResizablePanelGroup>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
