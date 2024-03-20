import { BadgeProps } from "@/components/ui/badge";

export const TOPICS = ["design", "coding"] as const;

export function isTopic(topic: string): topic is Topic {
  return TOPICS.includes(topic as Topic);
}

export const TAGS = ["design", "figma"] as const;

export const TAG_STYLE: {
  [key in (typeof TAGS)[number]]: BadgeProps["variant"];
} = {
  design: "blue",
  figma: "purple",
};

export type Topic = (typeof TOPICS)[number];
export type Tag = (typeof TAGS)[number];
