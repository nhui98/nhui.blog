import { BlogCategory, BlogTag } from "./lib/validators";

export type BlogMeta = {
  id: string;
  title: string;
  category: BlogCategory;
  date: string;
  excerpt: string;
  tags?: BlogTag[];
};
