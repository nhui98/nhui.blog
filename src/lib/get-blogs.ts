import glob from "fast-glob";
import * as path from "path";

import { BlogMeta } from "@/types";

export type BlogMetaWithSlug = {
  slug: string;
  title: string;
  description: string;
  topic: BlogMeta["custom"]["topic"];
  tags: BlogMeta["custom"]["tags"];
  date: BlogMeta["custom"]["date"];
};

export async function getAllBlogs(): Promise<BlogMetaWithSlug[]> {
  const blogFilenames = await glob(["*/page.tsx"], {
    cwd: path.join(process.cwd(), "src/app/[topic]/(blogs)"),
  });

  const blogs = await Promise.all(
    blogFilenames.map(async (filename) => {
      const { metadata } = (await import(
        `../app/[topic]/(blogs)/${filename}`
      )) as { metadata: BlogMeta };

      return {
        slug: filename.replace("/page.tsx", ""),
        title: metadata.title,
        description: metadata.description,
        topic: metadata.custom.topic,
        tags: metadata.custom.tags || [],
        date: metadata.custom.date,
      } satisfies BlogMetaWithSlug;
    }),
  );

  return blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
