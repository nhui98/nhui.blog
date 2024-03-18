import { BlogMeta } from "@/types";

export const blogMeta: BlogMeta = {
  id: "test",
  title: "Pixel Perfect",
  category: "design",
  date: "March 17, 2024",
  excerpt:
    "How beneficial is to be pixel perfect when designing and translating your designs into code.",
  tags: ["design", "figma"],
};

export default async function Page() {
  return <div>this is a test blog</div>;
}
