import { cva } from "class-variance-authority";
import { Code2, Palette } from "lucide-react";

import { Topic } from "@/lib/blogs";
import { cn } from "@/lib/utils";

const topicIconVariants = cva("rounded-md p-1", {
  variants: {
    variant: {
      blue: "bg-blue-200 text-blue-500",
      purple: "bg-purple-200 text-purple-500",
    },
  },
});

export function TopicIcon({
  topic,
  className,
}: {
  topic: Topic;
  className?: string;
}) {
  switch (topic) {
    case "design":
      return (
        <Palette
          className={cn(topicIconVariants({ variant: "blue" }), className)}
        />
      );
    case "coding":
      return (
        <Code2
          className={cn(topicIconVariants({ variant: "purple" }), className)}
        />
      );
  }
}
