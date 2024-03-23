import { promises as fs } from "fs";

import { Slug } from "./blogs";

export async function getCodeSnippet(slug: Slug, fileName: string) {
  try {
    const path =
      process.cwd() + `/src/app/(blogs)/${slug}/snippets/${fileName}`;

    const file = await fs.readFile(path, "utf8");

    if (!file || !file.length) {
      console.error(`File not found: ${path}`);
      return;
    }

    return file;
  } catch (error) {
    console.error(error);
    return;
  }
}
