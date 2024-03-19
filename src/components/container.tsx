import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1120px] px-2 pt-14", className)}>
      {children}
    </div>
  );
}

export function ContainerSm({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn("mx-auto w-full max-w-[736px] px-2 pt-14", className)}
    >
      {children}
    </article>
  );
}
