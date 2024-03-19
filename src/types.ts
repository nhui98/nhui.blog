import type { Metadata } from "next";

import { BlogCategory, BlogTag } from "./lib/validators";

export type BlogMeta = Metadata & {
  title: string;
  description: string;
  custom: {
    category: BlogCategory;
    tags: BlogTag[];
    date: string;
  };
};
