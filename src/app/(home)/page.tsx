import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { BlogCard } from "@/components/blog-card";
import { Container } from "@/components/container";
import { TopicIcon } from "@/components/icons/topic-icon";
import { Blog, getBlogs, Slug, Topic, TOPICS } from "@/lib/blogs";
import { cn } from "@/lib/utils";

export default async function Page() {
  const blogs = getBlogs();

  return (
    <Container>
      <hgroup className="space-y-8 text-center">
        <h1 className="whitespace-pre-line text-5xl font-bold leading-tight sm:text-6xl sm:leading-tight">
          Just some blogs.{"\n"} Browse at your leisure.
        </h1>
        <p className="text-xl font-medium tracking-tight">
          Topics include design, web development, and more.
        </p>
      </hgroup>

      <div className="mt-16 space-y-16">
        {TOPICS.map((topic) => (
          <BlogOverview
            key={topic}
            topic={topic}
            blogs={blogs.filter((blog) => blog.topic === topic)}
          />
        ))}
      </div>
    </Container>
  );
}

function BlogOverview<T extends Slug>({
  topic,
  blogs,
}: {
  topic: Topic;
  blogs: Blog<T>[];
}) {
  const hasBlogs = blogs.length > 0;

  return (
    <section>
      <div className="flex items-center gap-x-2 rounded-lg bg-gray-200 p-2">
        <TopicIcon topic={topic} className="size-8" />
        <h2 className="text-2xl font-semibold capitalize">{topic}</h2>
      </div>

      <div
        className={cn(
          "mt-3 [&>article]:my-1",
          blogs.length > 0 &&
            "grid auto-rows-[0px] grid-cols-1 gap-x-4 overflow-hidden sm:grid-cols-2 lg:grid-cols-3",
          blogs.length >= 1 && "grid-rows-1",
          blogs.length >= 2 && "grid-rows-2 sm:grid-rows-1",
          blogs.length >= 3 && "grid-rows-3 sm:grid-rows-2 lg:grid-rows-1",
          blogs.length >= 4 && "lg:grid-rows-2",
        )}
      >
        {hasBlogs ? (
          blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} type="home-page" />
          ))
        ) : (
          <p className="my-8 text-center">No blogs found.</p>
        )}
      </div>

      {hasBlogs && (
        <Link
          href={`/${topic}`}
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
