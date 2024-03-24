import { cn } from "@/lib/utils";

export default function Component() {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-1 md:grid-cols-3",
        "[&>*:nth-child(4)~*]:hidden md:[&>*:nth-child(4)~*]:block",
        "md:[&>*:nth-child(6)~*]:hidden",
      )}
    >
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="bg-blue-600 p-4 text-zinc-50">
          Grid item {i + 1}
        </div>
      ))}
    </div>
  );
}
