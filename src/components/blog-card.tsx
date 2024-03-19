import Link from "next/link";

import { BlogMetaWithSlug } from "@/lib/get-blogs";
import { cn } from "@/lib/utils";
import { TAG_STYLE } from "@/lib/validators";

import { Badge } from "./ui/badge";

type BlogCardProps = {
  blog: BlogMetaWithSlug;
  type: "home-page" | "category-listing";
};

export function BlogCard({ blog, type }: BlogCardProps) {
  return (
    <article className="relative flex flex-col rounded-md bg-transparent p-4 transition hover:bg-gray-100">
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
        <div className="text-sm font-medium text-gray-500">{blog.date}</div>
        <div className="flex flex-wrap justify-end gap-1">
          {blog.tags?.map((tag) => (
            <Badge key={tag} variant={TAG_STYLE[tag]}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <Link
        href={`/${blog.category}/${blog.slug}`}
        className="absolute inset-0"
      />
    </article>
  );
}
