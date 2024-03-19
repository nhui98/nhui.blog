import "server-only";

import glob from "fast-glob";
import * as path from "path";

import { BlogMeta } from "@/types";

export type BlogMetaWithSlug = BlogMeta & { slug: string };

export async function getAllBlogs(): Promise<BlogMetaWithSlug[]> {
  const blogFilenames = await glob(["*/page.tsx"], {
    cwd: path.join(process.cwd(), "src/app/[category]/(blogs)"),
  });

  const blogs = await Promise.all(
    blogFilenames.map(async (filename) => {
      const { blogMeta } = (await import(
        `/src/app/[category]/(blogs)/${filename}`
      )) as { blogMeta: BlogMeta };

      return {
        slug: filename.replace("/page.tsx", ""),
        ...blogMeta,
      };
    }),
  );

  return blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
