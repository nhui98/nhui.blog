import { BadgeProps } from "@/components/ui/badge";

export const BLOG_CATEGORIES = ["design", "coding"] as const;

export function isBlogCategory(category: string): category is BlogCategory {
  return BLOG_CATEGORIES.includes(category as BlogCategory);
}

export const TAGS = ["design", "figma"] as const;

export const TAG_STYLE: {
  [key in (typeof TAGS)[number]]: BadgeProps["variant"];
} = {
  design: "blue",
  figma: "purple",
};

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
export type BlogTag = (typeof TAGS)[number];
