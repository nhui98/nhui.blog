import { ArticleHeading } from "@/components/article-heading";
import { CodeHighlight } from "@/components/code-highlight";
import { BlogMeta } from "@/types";

export const metadata: BlogMeta = {
  title: "Limit CSS Grid Rows",
  description: "How to limit the number of rows in a CSS grid.",
  custom: {
    topic: "design",
    date: "March 17, 2024",
    tags: ["design", "figma"],
  },
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
      <ArticleHeading metadata={metadata} />
      <h2>Highlight Code</h2>
      <CodeHighlight codeString={codeString} />
    </>
  );
}
