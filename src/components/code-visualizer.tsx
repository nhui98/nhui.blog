"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { Copy } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

import { CodeSnippet } from "./code-snippet";
import { Separator } from "./ui/separator";

type File = {
  filename: string;
  content: string;
  language?: string;
};

export function CodeVisualizer({
  files,
  inLanguageTab,
}: {
  files: File[] | Omit<File, "filename">;
  inLanguageTab?: boolean;
}) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();

  useEffect(() => {
    if (!copiedText) return;

    copiedText.success
      ? toast.success("Copied to clipboard")
      : toast.error("Failed to copy");
  }, [copiedText]);

  if (!Array.isArray(files)) {
    return (
      <div className="not-prose relative my-2 text-sm">
        <CodeSnippet
          codeString={files.content}
          language={files.language}
          customStyle={{ marginBlock: 0 }}
        />

        <button
          className="absolute right-2 top-2 rounded p-1.5 transition-colors hover:bg-gray-700"
          onClick={() => copyToClipboard(files.content)}
        >
          <Copy className="size-4 text-zinc-50" />
        </button>
      </div>
    );
  }

  return (
    <Tabs.Root
      defaultValue={files[0].filename}
      className={cn(
        "not-prose my-2",
        !inLanguageTab && "-mx-4 overflow-x-auto",
      )}
    >
      <div className={cn("relative", !inLanguageTab && "min-w-[736px]")}>
        <Tabs.List className="flex items-center justify-start bg-[#1d1f21] p-1.5">
          {files.map((file) => (
            <Tabs.Trigger
              key={file.filename}
              value={file.filename}
              className="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium text-gray-50 ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-blue-500 data-[state=active]:shadow-sm dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 dark:data-[state=active]:bg-purple-500"
            >
              {file.filename}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {files.map((file) => (
          <Tabs.Content
            key={file.filename}
            value={file.filename}
            className="text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300"
          >
            <CodeSnippet
              codeString={file.content}
              language={file.language}
              customStyle={{ marginBlock: 0 }}
            />
            <button
              className="absolute right-2 top-2 rounded p-1.5 transition-colors hover:bg-gray-700"
              onClick={() => copyToClipboard(file.content)}
            >
              <Copy className="size-4 text-zinc-50" />
            </button>
          </Tabs.Content>
        ))}
      </div>
    </Tabs.Root>
  );
}

type Language = {
  language: string;
  files: File[] | Omit<File, "filename">;
};

export function LanguagesSelectTab({ languages }: { languages: Language[] }) {
  return (
    <Tabs.Root
      defaultValue={languages[0].language}
      className="-mx-4 overflow-x-auto"
    >
      <div className="min-w-[736px]">
        <Tabs.List className="relative flex gap-2">
          {languages.map((language) => (
            <Tabs.Trigger
              key={language.language}
              value={language.language}
              className="relative z-10 border-b-2 border-transparent px-4 py-1.5 text-sm font-semibold transition-colors data-[state=active]:border-blue-500 dark:data-[state=active]:border-purple-500"
            >
              {language.language}
            </Tabs.Trigger>
          ))}
          <Separator className="absolute bottom-0 left-0 h-0.5" />
        </Tabs.List>

        {languages.map((language) => (
          <Tabs.Content key={language.language} value={language.language}>
            <CodeVisualizer files={language.files} inLanguageTab />
          </Tabs.Content>
        ))}
      </div>
    </Tabs.Root>
  );
}
