import { Code2, Palette } from "lucide-react";

import { BlogCategory } from "@/lib/validators";

export const BLOG_CATEGORY_ICON: {
  [key in BlogCategory]: JSX.Element;
} = {
  design: (
    <Palette className="size-8 rounded-md bg-blue-200 p-1 text-blue-500" />
  ),
  coding: (
    <Code2 className="size-8 rounded-md bg-purple-200 p-1 text-purple-500" />
  ),
};
