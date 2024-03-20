"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Blog, Slug } from "@/data/blogs";

import { BlogCard } from "./blog-card";

export function BlogListing<T extends Slug>({
  blogs,
  tags,
}: {
  blogs: Blog<T>[];
  tags: string[];
}) {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState(["*"]);

  const filteredBlogs = blogs.filter((blog) => {
    const passesSearchFilter =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase());

    const passesTagFilter = selectedTags.includes("*")
      ? true
      : blog.tags?.some((tag) => selectedTags.includes(tag));

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
        type="multiple"
        value={selectedTags}
        onValueChange={(value) => {
          if (!value.length) return setSelectedTags(["*"]);
          if (!selectedTags.includes("*") && value.includes("*")) {
            return setSelectedTags(["*"]);
          }
          setSelectedTags(value.filter((tag) => tag !== "*"));
        }}
        className="mt-4 flex-wrap justify-start"
      >
        <TagToggleGroupItem value="*">All</TagToggleGroupItem>
        {tags.map((tag) => (
          <TagToggleGroupItem key={tag} value={tag}>
            {tag}
          </TagToggleGroupItem>
        ))}
      </ToggleGroup>

      <div className="mt-4 space-y-1">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogCard key={blog.title} blog={blog} type="category-listing" />
          ))
        ) : (
          <div className="text-center">No blogs found.</div>
        )}
      </div>
    </div>
  );
}

function TagToggleGroupItem({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  return (
    <ToggleGroupItem
      value={value}
      className="h-fit py-1 data-[state=on]:bg-gray-700 data-[state=on]:text-gray-50"
    >
      {children}
    </ToggleGroupItem>
  );
}
