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

export const DESIGN_BLOGS: Blog[] = [
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

export const CODING_BLOGS: Blog[] = [
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