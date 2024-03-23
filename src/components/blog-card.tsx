import Link from "next/link";

import { Blog, getTagStyle, Slug } from "@/lib/blogs";
import { cn } from "@/lib/utils";

import { Badge } from "./ui/badge";

export function BlogCard<T extends Slug>({
  blog,
  type,
}: {
  blog: Blog<T>;
  type: "home-page" | "category-listing";
}) {
  return (
    <article className="relative flex flex-col rounded-md bg-transparent p-4 transition hover:bg-gray-100 dark:hover:bg-gray-900">
      <h3 className="flex flex-1 items-center text-xl font-semibold">
        {blog.title}
      </h3>

      <p
        className={cn(
          "mt-2",
          type === "home-page" && "line-clamp-3 h-[72px]",
          type === "category-listing" &&
            "line-clamp-3 h-[72px] sm:line-clamp-2 sm:h-[48px]",
        )}
      >
        {blog.description}
      </p>

      <div className="mt-4 flex items-center justify-between gap-x-4">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {blog.date}
        </div>
        <div className="flex flex-wrap justify-end gap-1">
          {blog.tags?.map((tag) => (
            <Badge key={tag} variant={getTagStyle(tag)}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <Link href={`/${blog.slug}`} className="absolute inset-0" />
    </article>
  );
}
