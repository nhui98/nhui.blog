import { notFound } from "next/navigation";

import { BlogListing } from "@/components/blog-listing";
import { BlogContainer } from "@/components/container";
import { BLOG_CATEGORY_ICON } from "@/components/icons/blog-category-icons";
import { Separator } from "@/components/ui/separator";
import { getAllBlogs } from "@/lib/get-blogs";
import { isBlogCategory } from "@/lib/validators";

export default async function Page({
  params: { category },
}: {
  params: { category: string };
}) {
  if (!isBlogCategory(category)) notFound();

  const blogs = (await getAllBlogs()).filter(
    (blog) => blog.category === category,
  );

  const tags = new Set<string>();

  blogs.forEach((blog) => blog.tags?.forEach((tag) => tags.add(tag)));

  return (
    <BlogContainer className="pt-14">
      <div className="flex items-center gap-x-2">
        {BLOG_CATEGORY_ICON[category]}
        <h1 className="text-3xl font-semibold capitalize">{category}</h1>
      </div>

      <Separator className="my-6" />

      <BlogListing blogs={blogs} tags={Array.from(tags)} />
    </BlogContainer>
  );
}
