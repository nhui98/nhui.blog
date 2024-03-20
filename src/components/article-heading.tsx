import { Blog, getTagStyle, Slug } from "@/lib/blogs";

import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

export function ArticleHeading<T extends Slug>({ blog }: { blog: Blog<T> }) {
  return (
    <section className="not-prose">
      <hgroup className="space-y-4 text-gray-950 dark:text-gray-50">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="text-lg">{blog.description}</p>
      </hgroup>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {blog.date}
        </div>
        <div className="flex flex-wrap gap-1">
          {blog.tags?.map((tag) => (
            <Badge key={tag} variant={getTagStyle(tag)}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <Separator className="my-8" />
    </section>
  );
}
