import { Metadata } from "next";

import { BlogHeading } from "@/components/blog-heading";
import { CodeOutputVizualizer } from "@/components/code-output-vizualizer";
import { LanguagesSelectTab } from "@/components/code-visualizer";
import { getBlog } from "@/lib/blogs";
import { getCodeSnippet } from "@/lib/get-code-snippet";

import GridExample from "./snippets/grid-example-1";
import GridExample3 from "./snippets/grid-example-3";

const blog = getBlog("limit-css-grid-rows");

export const metadata: Metadata = {
  title: blog.title,
  description: blog.description,
};

export const dynamic = "force-static";

export default async function Page() {
  const [gridExample, gridExample2, gridExample3, useMediaQuery] =
    await Promise.all([
      getCodeSnippet(blog.slug, "grid-example-1.tsx"),
      getCodeSnippet(blog.slug, "grid-example-2.tsx"),
      getCodeSnippet(blog.slug, "grid-example-3.tsx"),
      getCodeSnippet(blog.slug, "use-media-query.ts"),
    ]);

  return (
    <>
      <BlogHeading blog={blog} />

      <p>
        {
          "CSS Grid is a powerful way to create layouts for the web. If you are new with the grid layout module,"
        }{" "}
        <a href="https://css-tricks.com/" target="_blank">
          CSS Tricks
        </a>{" "}
        {
          "has a fantastic complete guide to learning and using the various grid properties which I highly recommend checking out"
        }{" "}
        <a
          href="https://css-tricks.com/snippets/css/complete-guide-grid/"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <p>
        {
          "For this post, I wanted to focus on limiting the number of rows in a grid layout."
        }
      </p>
      <p>{"Consider this example:"}</p>

      <CodeOutputVizualizer caption="Figure 1: Grid Example.">
        <GridExample />
      </CodeOutputVizualizer>

      {gridExample && (
        <LanguagesSelectTab
          languages={[
            {
              language: "React + Tailwind",
              files: [
                {
                  filename: "component.tsx",
                  content: gridExample,
                  canCopy: true,
                },
              ],
            },
          ]}
        />
      )}

      <p>
        {
          "Here we've specified a 3x2 grid container (6 cells). However, since there are 8 grid items (requiring 8 cells), an additional row was added implicitly by the grid container. This is the default behavior but in this situation, I want to limit the number of rows to 2."
        }
      </p>

      <p>
        {
          "One possible solution is to simply reduce the number of grid items - to 6 in this case. This is fine but does not take responsiveness into account. If, on smaller screens we wanted to change to a 2x2 container, the number of grid items would need to be adjusted again. We can achieve this with the"
        }{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia"
          target="_blank"
        >
          window.matchMedia()
        </a>{" "}
        {
          "method to specify and listen for matching media queries (such as when the viewport is at certain thresholds) and adjust the number of grid items accordingly."
        }
      </p>

      <p>{"Here is an example:"}</p>

      {gridExample2 && useMediaQuery && (
        <LanguagesSelectTab
          languages={[
            {
              language: "React + Tailwind",
              files: [
                {
                  filename: "component.tsx",
                  content: gridExample2,
                  canCopy: true,
                },
                {
                  filename: "use-media-query.ts",
                  content: useMediaQuery,
                  canCopy: true,
                },
              ],
            },
          ]}
        />
      )}

      <p>
        {"Here, we're using React's"}{" "}
        <a
          href="https://react.dev/reference/react/useSyncExternalStore"
          target="_blank"
        >
          useSyncExternalStore
        </a>{" "}
        {"hook to listen for the specified media query"}{" "}
        <code>(min-width: 768px)</code>{" "}
        {"and adjust the number of grid items accordingly."}
      </p>

      <p>
        {
          "Although this works, I find this solution a bit cumbersome. Not to mention we're using the"
        }{" "}
        <code>window</code>{" "}
        {
          "object which is only available on the client. If your goal is to purely render this component on the server then this solution will not work. Luckily there's a better way to achieve this with CSS alone."
        }
      </p>

      <p>
        {
          "Using CSS selectors we can target a specific grid item and set all its subsequent siblings to display as none."
        }
      </p>

      <p>{"Here's what that looks like:"}</p>

      <CodeOutputVizualizer caption="Figure 2: Grid limited to 2 rows.">
        <GridExample3 />
      </CodeOutputVizualizer>

      {gridExample3 && useMediaQuery && (
        <LanguagesSelectTab
          languages={[
            {
              language: "React + Tailwind",
              files: [
                {
                  filename: "component.tsx",
                  content: gridExample3,
                  canCopy: true,
                },
              ],
            },
          ]}
        />
      )}

      <p>
        {
          "In this example we are selecting all the grid container's children using the"
        }{" "}
        <code>{">"}</code> {"child combinator and the"} <code>{"*"}</code>{" "}
        {"universal selector. We then target the specific child item with the"}{" "}
        <code>nth-child(n)</code>{" "}
        {
          "pseudo-class. In this case, we're selecting the 4th child on smaller screens and the 6th child on larger screens. After that, we target its subsequent siblings using the"
        }{" "}
        <code>~</code>{" "}
        {"subsequent sibling combinator and set their display to"}{" "}
        <code>none</code>
        {"."}
      </p>

      <p>
        Note that we need to reset the display property for our{" "}
        <code>:nth-child(4)</code> selector, otherwise only 4 grid items will
        show for larger screens as well.
      </p>

      <p>
        {
          "There you have it, as you can see in Figure 2, even though the number of grid items to be displayed is 8, we've limited it to 6 on larger devices and 4 on smaller devices - subsequently keeping the number of rows to 2."
        }
      </p>
    </>
  );
}
