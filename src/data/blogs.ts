import { Tag, Topic } from "@/lib/validators";

export type Blog<TSlug extends Slug> = {
  slug: TSlug;
  title: string;
  description: string;
  topic: Topic;
  tags: Tag[];
  date: string;
};

export function getBlogs() {
  return Object.values(BLOGS).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

const SLUGS = ["limit-css-grid-rows", "test"] as const;
export type Slug = (typeof SLUGS)[number];

export const BLOGS: {
  [slug in Slug]: Blog<slug>;
} = {
  "limit-css-grid-rows": {
    slug: "limit-css-grid-rows",
    title: "Limit CSS Grid Rows",
    description: "How to limit the number of rows in a CSS grid.",
    topic: "design",
    tags: ["design", "figma"],
    date: "March 17, 2024",
  },
  test: {
    slug: "test",
    title: "Test",
    description: "Test",
    topic: "design",
    tags: ["design"],
    date: "March 17, 2024",
  },
};
