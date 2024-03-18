import { BLOGS } from "@/data/blog-data";

import { BlogOverview } from "./components/blog-overview";

export default function Page() {
  return (
    <div className="mx-auto max-w-[1120px] px-2 pt-14">
      <hgroup className="space-y-8 text-center">
        <h1 className="whitespace-pre-line text-5xl font-bold leading-tight sm:text-6xl sm:leading-tight">
          Just some blogs.{"\n"} Browse at your leisure.
        </h1>
        <p className="text-xl font-medium tracking-tight">
          Topics include design, web development, and more.
        </p>
      </hgroup>

      <div className="mt-16 space-y-16">
        {BLOGS.map(({ category, blogs }) => (
          <BlogOverview key={category} category={category} blogs={blogs} />
        ))}
      </div>
    </div>
  );
}
