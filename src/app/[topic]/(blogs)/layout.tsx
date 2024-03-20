import { ContainerSm } from "@/components/container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ContainerSm className="prose prose-gray overflow-x-hidden">
      {children}
    </ContainerSm>
  );
}
