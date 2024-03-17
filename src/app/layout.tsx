import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";

const font = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Blog Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-gray-50 text-gray-950", font.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
