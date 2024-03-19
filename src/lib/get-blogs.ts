import "server-only";

import glob from "fast-glob";
import * as path from "path";

import { BlogMeta } from "@/types";

export type BlogMetaWithSlug = {
  slug: string;
  title: string;
  description: string;
  category: BlogMeta["custom"]["category"];
  tags: BlogMeta["custom"]["tags"];
  date: BlogMeta["custom"]["date"];
};

export async function getAllBlogs(): Promise<BlogMetaWithSlug[]> {
  const blogFilenames = await glob(["*/page.tsx"], {
    cwd: path.join(process.cwd(), "src/app/[category]/(blogs)"),
  });

  const blogs = await Promise.all(
    blogFilenames.map(async (filename) => {
      const { metadata } = (await import(
        `/src/app/[category]/(blogs)/${filename}`
      )) as { metadata: BlogMeta };

      return {
        slug: filename.replace("/page.tsx", ""),
        title: metadata.title,
        description: metadata.description,
        category: metadata.custom.category,
        tags: metadata.custom.tags || [],
        date: metadata.custom.date,
      } satisfies BlogMetaWithSlug;
    }),
  );

  return blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
