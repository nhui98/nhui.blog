import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container
      className={cn(
        "prose prose-gray max-w-[736px] overflow-x-hidden dark:prose-invert",
        "prose-a:text-blue-500 dark:prose-a:text-purple-500",
      )}
    >
      <article>{children}</article>
    </Container>
  );
}
