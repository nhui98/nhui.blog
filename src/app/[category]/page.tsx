import { notFound } from "next/navigation";

import { BlogContainer } from "@/components/container";
import { Separator } from "@/components/ui/separator";
import { BLOG_CATEGORY_ICON, BlogCategory, BLOGS } from "@/data/blog-data";

import { BlogList } from "./components/blog-list";

export default function Page({
  params,
}: {
  params: { category: BlogCategory };
}) {
  const blogs = BLOGS.find((blog) => blog.category === params.category);

  if (!blogs) notFound();

  const tags = new Set<string>();

  blogs.blogs.forEach((blog) => {
    blog.tags?.forEach((tag) => tags.add(tag.name));
  });

  return (
    <BlogContainer className="pt-14">
      <div className="flex items-center gap-x-2">
        {BLOG_CATEGORY_ICON[params.category]}
        <h1 className="text-3xl font-semibold capitalize">{params.category}</h1>
      </div>

      <Separator className="my-6" />

      <BlogList blogs={blogs.blogs} tags={Array.from(tags)} />
    </BlogContainer>
  );
}
