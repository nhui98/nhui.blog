"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BlogMetaWithSlug } from "@/lib/get-blogs";

import { BlogCard } from "./blog-card";

export function BlogListing({
  blogs,
  tags,
}: {
  blogs: BlogMetaWithSlug[];
  tags: string[];
}) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("*");

  const filteredBlogs = blogs.filter((blog) => {
    const passesSearchFilter =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(search.toLowerCase());

    const passesTagFilter =
      selectedTag === "*"
        ? true
        : blog.tags?.some((tag) => tag === selectedTag);

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
          <BlogCard key={blog.title} blog={blog} type="category-listing" />
        ))}
      </div>
    </div>
  );
}
