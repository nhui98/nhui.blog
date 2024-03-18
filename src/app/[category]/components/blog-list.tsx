"use client";

import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Blog } from "@/data/blog-data";

export function BlogList({ blogs, tags }: { blogs: Blog[]; tags: string[] }) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("*");

  const filteredBlogs = blogs.filter((blog) => {
    const passesSearchFilter =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(search.toLowerCase());

    const passesTagFilter =
      selectedTag === "*"
        ? true
        : blog.tags?.some((tag) => tag.name === selectedTag);

    return passesSearchFilter && passesTagFilter;
  });

  return (
    <div>
      <Input
        placeholder="Search for blog..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ToggleGroup
        type="single"
        defaultValue="*"
        value={selectedTag}
        onValueChange={(value) => {
          if (value) setSelectedTag(value);
        }}
        className="mt-4 flex-wrap justify-start"
      >
        <ToggleGroupItem value="*" className="h-fit py-1">
          All
        </ToggleGroupItem>
        {tags.map((tag) => (
          <ToggleGroupItem key={tag} value={tag} className="h-fit py-1">
            {tag}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <div className="mt-4 space-y-1">
        {filteredBlogs.map((blog) => (
          <BlogRow key={blog.title} blog={blog} />
        ))}
      </div>
    </div>
  );
}

function BlogRow({ blog }: { blog: Blog }) {
  return (
    <article className="relative flex flex-col rounded-md bg-transparent p-4 transition hover:bg-gray-100">
      <h3 className="flex flex-1 items-center text-xl font-semibold">
        {blog.title}
      </h3>
      <p className="mt-2 line-clamp-2 h-[48px]">{blog.excerpt}</p>
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
