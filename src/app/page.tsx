import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { BlogCard } from "@/components/blog-card";
import { Container } from "@/components/container";
import { TopicIcon } from "@/components/icons/topic-icon";
import { Blog, getBlogs, Slug, Topic, TOPICS } from "@/lib/blogs";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Just some blogs. Browse at your leisure. Topics include design, web development, and more.",
};

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
  return (
    <section>
      <div className="flex items-center gap-x-2 rounded-lg bg-gray-200 p-2 dark:bg-gray-800">
        <TopicIcon topic={topic} className="size-8" />
        <h2 className="text-2xl font-semibold capitalize">{topic}</h2>
      </div>

      <div
        className={cn(
          "mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
          "[&>*:nth-child(3)~*]:hidden sm:[&>*:nth-child(3)~*]:flex",
          "lg:[&>*:nth-child(3)~*]:flex sm:[&>*:nth-child(4)~*]:hidden",
          "lg:[&>*:nth-child(6)~*]:hidden",
        )}
      >
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} type="home-page" />
          ))
        ) : (
          <p className="my-8 text-center">No blogs found.</p>
        )}
      </div>

      {blogs.length > 0 && (
        <Link
          href={`/${topic}`}
          className="group relative mx-auto mt-8 flex h-12 w-fit items-center gap-x-4 py-4 pl-2 pr-6"
          aria-label="Browse all blogs in this topic"
        >
          <ArrowRight className="size-8 text-zinc-900 transition-all duration-300 group-hover:translate-x-2 group-hover:text-blue-500 dark:text-zinc-50 dark:group-hover:text-purple-500" />
          <span className="font-medium">Browse All</span>
          <div className="absolute inset-0 size-12 rounded-full border-2 border-zinc-900 transition-all duration-300 group-hover:w-full group-hover:border-blue-500 dark:border-zinc-200 dark:group-hover:border-purple-500"></div>
        </Link>
      )}
    </section>
  );
}
