import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Blog, BLOG_CATEGORY_ICON, BlogCategory } from "@/data/blog-data";
import { cn } from "@/lib/utils";

type OverviewProps = {
  category: BlogCategory;
  blogs: Blog[];
};

export function BlogOverview({ category, blogs }: OverviewProps) {
  const hasBlogs = blogs.length > 0;

  return (
    <section>
      <div className="flex items-center gap-x-2 rounded-lg bg-gray-200 p-2">
        {BLOG_CATEGORY_ICON[category]}
        <h2 className="text-2xl font-semibold capitalize">{category}</h2>
      </div>

      <div
        className={cn(
          "mt-3 space-y-4",
          blogs.length > 0 &&
            "grid auto-rows-[0px] grid-cols-1 gap-x-4 overflow-hidden sm:grid-cols-2 lg:grid-cols-3",
          blogs.length >= 1 && "grid-rows-1",
          blogs.length >= 2 && "grid-rows-2 sm:grid-rows-1",
          blogs.length >= 3 && "grid-rows-3 sm:grid-rows-2 lg:grid-rows-1",
          blogs.length >= 4 && "lg:grid-rows-2",
        )}
      >
        {hasBlogs ? (
          blogs.map((blog) => <BlogSummaryCard key={blog.id} blog={blog} />)
        ) : (
          <p className="my-8 text-center">No blogs found.</p>
        )}
      </div>

      {hasBlogs && (
        <Link
          href={`/${category}`}
          className="group relative mx-auto mt-8 flex h-12 w-fit items-center gap-x-4 py-4 pl-2 pr-6"
        >
          <ArrowRight className="size-8 text-zinc-900 transition-all duration-300 group-hover:translate-x-2 group-hover:text-blue-500" />
          <span className="font-medium">Browse All</span>
          <div className="absolute inset-0 size-12 rounded-full border-2 border-zinc-900 transition-all duration-300 group-hover:w-full group-hover:border-blue-500"></div>
        </Link>
      )}
    </section>
  );
}

function BlogSummaryCard({ blog }: { blog: Blog }) {
  return (
    <article className="relative flex flex-col rounded-md bg-transparent p-4 transition hover:bg-gray-100">
      <h3 className="flex flex-1 items-center text-xl font-semibold">
        {blog.title}
      </h3>
      <p className="mt-2 line-clamp-3 h-[72px]">{blog.excerpt}</p>
      <div className="mt-4 flex items-center justify-between gap-x-4">
        <div className="text-sm font-medium text-gray-500">{blog.date}</div>
        <div className="flex flex-wrap justify-end gap-1">
          {blog.tags?.map((tag) => (
            <Badge key={tag.name} variant={tag.tagStyle}>
              {tag.name}
            </Badge>
          ))}
        </div>
      </div>
      <Link href={blog.href} className="absolute inset-0" />
    </article>
  );
}
