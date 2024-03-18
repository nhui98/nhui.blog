import { Code2, Palette } from "lucide-react";

import { BadgeProps } from "@/components/ui/badge";

export type Blog = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: {
    tag: string;
    tagStyle: BadgeProps["variant"];
  }[];
  href: string;
};

export type BlogCategory = "design" | "coding";

export type Blogs = {
  category: BlogCategory;
  blogs: Blog[];
};

export const BLOG_CATEGORY_ICON: Record<BlogCategory, JSX.Element> = {
  design: (
    <Palette className="size-8 rounded-md bg-blue-200 p-1 text-blue-500" />
  ),
  coding: (
    <Code2 className="size-8 rounded-md bg-yellow-200 p-1 text-yellow-500" />
  ),
};

const DESIGN_BLOGS: Blog[] = [
  {
    id: "pixel-perfect",
    title: "Pixel Perfect",
    date: "March 17, 2024",
    excerpt:
      "How beneficial is to be pixel perfect when designing and translating your designs into code.",
    tags: [
      { tag: "design", tagStyle: "blue" },
      { tag: "figma", tagStyle: "purple" },
    ],
    href: "/design/pixel-perfect",
  },
];

const CODING_BLOGS: Blog[] = [
  {
    id: "pixel-perfect",
    title: "Pixel Perfect",
    date: "March 17, 2024",
    excerpt:
      "How beneficial is to be pixel perfect when designing and translating your designs into code.",
    tags: [
      { tag: "design", tagStyle: "blue" },
      { tag: "figma", tagStyle: "purple" },
    ],
    href: "/design/pixel-perfect",
  },
];

export const BLOGS: Blogs[] = [
  { category: "design", blogs: DESIGN_BLOGS },
  { category: "coding", blogs: CODING_BLOGS },
];
