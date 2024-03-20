import { Code2, Palette } from "lucide-react";

import { cn } from "@/lib/utils";
import { Topic } from "@/lib/validators";

export function TopicIcon({
  topic,
  className,
}: {
  topic: Topic;
  className?: string;
}) {
  const styles = cn("rounded-md p-1", className);

  switch (topic) {
    case "design":
      return <Palette className={cn("bg-blue-200 text-blue-500", styles)} />;
    case "coding":
      return <Code2 className={cn("bg-purple-200 text-purple-500", styles)} />;
  }
}
