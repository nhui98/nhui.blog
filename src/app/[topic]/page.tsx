import { notFound } from "next/navigation";

import { BlogListing } from "@/components/blog-listing";
import { Container } from "@/components/container";
import { TopicIcon } from "@/components/icons/topic-icon";
import { Separator } from "@/components/ui/separator";
import { getBlogs, isTopic, TOPICS } from "@/lib/blogs";

export async function generateStaticParams() {
  return TOPICS.map((topic) => ({
    topic,
  }));
}

export default async function Page({
  params: { topic },
}: {
  params: { topic: string };
}) {
  if (!isTopic(topic)) notFound();

  const blogs = getBlogs().filter((blog) => blog.topic === topic);

  const tags = new Set<string>();

  blogs.forEach((blog) => blog.tags?.forEach((tag) => tags.add(tag)));

  return (
    <Container className="max-w-[736px]">
      <div className="flex items-center gap-x-2">
        <TopicIcon topic={topic} className="size-8" />
        <h1 className="text-3xl font-semibold capitalize">{topic}</h1>
      </div>

      <Separator className="my-6" />

      <BlogListing blogs={blogs} tags={Array.from(tags)} />
    </Container>
  );
}
