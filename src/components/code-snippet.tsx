import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { AtomDark } from "@/lib/atom-dark-styles";

export function CodeSnippet({
  codeString,
  language = "tsx",
  customStyle = {},
}: {
  codeString: string;
  language?: string;
  customStyle?: React.CSSProperties;
}) {
  return (
    <SyntaxHighlighter
      style={AtomDark}
      useInlineStyles={true}
      language={language}
      customStyle={customStyle}
    >
      {codeString.trim()}
    </SyntaxHighlighter>
  );
}
