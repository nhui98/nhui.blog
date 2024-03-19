import { TAG_STYLE } from "@/lib/validators";
import { BlogMeta } from "@/types";

import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

export function ArticleHeading({ metadata }: { metadata: BlogMeta }) {
  return (
    <section className="not-prose">
      <hgroup className="space-y-4">
        <h1 className="text-4xl font-bold">{metadata.title}</h1>
        <p className="text-lg">{metadata.description}</p>
      </hgroup>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div className="text-sm font-medium text-gray-500">
          {metadata.custom.date}
        </div>
        <div className="flex flex-wrap gap-1">
          {metadata.custom.tags?.map((tag) => (
            <Badge key={tag} variant={TAG_STYLE[tag]}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <Separator className="my-8" />
    </section>
  );
}
