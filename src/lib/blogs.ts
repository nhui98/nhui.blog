import { BadgeProps } from "@/components/ui/badge";

// Topics ----------------------------------------------------------------
export const TOPICS = ["coding"] as const;

export function isTopic(topic: string): topic is Topic {
  return TOPICS.includes(topic);
}

export type Topic = (typeof TOPICS)[number];

// Tags ----------------------------------------------------------------
export const TAGS = ["styling", "nextjs"] as const;

export function getTagStyle(tag: Tag): BadgeProps["variant"] {
  switch (tag) {
    case "styling":
      return "blue";
    case "nextjs":
    default:
      return "default";
  }
}

export type Tag = (typeof TAGS)[number];

// Slugs ----------------------------------------------------------------
const SLUGS = ["limit-css-grid-rows", "forms-in-nextjs"] as const;

export function isSlug(slug: string): slug is Slug {
  return SLUGS.includes(slug);
}

export type Slug = (typeof SLUGS)[number];

// Blogs ----------------------------------------------------------------
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

export function getBlog<T extends Slug>(slug: T): Blog<T> {
  return BLOGS[slug];
}

const BLOGS: {
  [slug in Slug]: Blog<slug>;
} = {
  "limit-css-grid-rows": {
    slug: "limit-css-grid-rows",
    title: "Limit CSS Grid Rows",
    description: "How to limit the number of rows in a CSS grid.",
    topic: "coding",
    tags: ["styling"],
    date: "March 23, 2024",
  },
  "forms-in-nextjs": {
    slug: "forms-in-nextjs",
    title: "Forms in Nextjs",
    description:
      "Create a form and handle submissions with server actions. Validate the form data both on the client and server using react-hook-form and zod.",
    topic: "coding",
    tags: ["nextjs"],
    date: "March 27, 2024",
  },
};
