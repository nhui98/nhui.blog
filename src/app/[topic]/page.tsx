import { capitalize } from "lodash";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { BlogListing } from "@/components/blog-listing";
import { Container } from "@/components/container";
import { TopicIcon } from "@/components/icons/topic-icon";
import { Separator } from "@/components/ui/separator";
import { getBlogs, isTopic, TOPICS } from "@/lib/blogs";

type Props = {
  params: { topic: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  if (!isTopic(params.topic)) notFound();

  return {
    title: capitalize(params.topic) + " " + "Blogs",
    description: "Just some blogs. Browse at your leisure.",
  };
}

export async function generateStaticParams() {
  return TOPICS.map((topic) => ({
    topic,
  }));
}

export default async function Page({ params }: Props) {
  if (!isTopic(params.topic)) notFound();

  const blogs = getBlogs().filter((blog) => blog.topic === params.topic);

  const tags = new Set<string>();

  blogs.forEach((blog) => blog.tags?.forEach((tag) => tags.add(tag)));

  return (
    <Container className="max-w-[736px]">
      <div className="flex items-center gap-x-2">
        <TopicIcon topic={params.topic} className="size-8" />
        <h1 className="text-3xl font-semibold capitalize">{params.topic}</h1>
      </div>

      <Separator className="my-6" />

      <BlogListing blogs={blogs} tags={Array.from(tags)} />
    </Container>
  );
}
