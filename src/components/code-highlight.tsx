import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

export function CodeHighlight({ codeString }: { codeString: string }) {
  return (
    <SyntaxHighlighter showLineNumbers language="typescript" style={theme}>
      {codeString.trim()}
    </SyntaxHighlighter>
  );
}
