import { BlogContainer } from "@/components/container";
import { BlogMeta } from "@/types";

export const metadata: BlogMeta = {
  title: "Limit CSS Grid Rows",
  description: "How to limit the number of rows in a CSS grid.",
  custom: {
    category: "design",
    date: "March 17, 2024",
    tags: ["design", "figma"],
  },
};

export default async function Page() {
  return <BlogContainer>this is a test blog</BlogContainer>;
}
