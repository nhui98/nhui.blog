import type { Metadata } from "next";

import { Tag, Topic } from "./lib/validators";

export type BlogMeta = Metadata & {
  title: string;
  description: string;
  custom: {
    topic: Topic;
    tags: Tag[];
    date: string;
  };
};
