import { Metadata } from "next";

import { ArticleHeading } from "@/components/article-heading";
import { CodeHighlight } from "@/components/code-highlight";
import { BLOGS } from "@/data/blogs";

const blog = BLOGS["limit-css-grid-rows"];

export const metadata: Metadata = {
  title: blog.title,
  description: blog.description,
};

export default async function Page() {
  const codeString = `
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism"; 

const Component = () => {
  const codeString = 'const test: string = 5';

  return (
    <SyntaxHighlighter showLineNumbers language="typescript" style={darcula}>
      {codeString}
    </SyntaxHighlighter>
  );
};
`;
  return (
    <>
      <ArticleHeading blog={blog} />
      <h2>Highlight Code</h2>
      <CodeHighlight codeString={codeString} />
    </>
  );
}
