import { notFound } from "next/navigation";

import { BlogListing } from "@/components/blog-listing";
import { ContainerSm } from "@/components/container";
import { BLOG_CATEGORY_ICON } from "@/components/icons/blog-category-icons";
import { Separator } from "@/components/ui/separator";
import { getAllBlogs } from "@/lib/get-blogs";
import { BLOG_CATEGORIES, isBlogCategory } from "@/lib/validators";

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({
    category,
  }));
}

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
    <ContainerSm>
      <div className="flex items-center gap-x-2">
        {BLOG_CATEGORY_ICON[category]}
        <h1 className="text-3xl font-semibold capitalize">{category}</h1>
      </div>

      <Separator className="my-6" />

      <BlogListing blogs={blogs} tags={Array.from(tags)} />
    </ContainerSm>
  );
}
