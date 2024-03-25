import { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "404",
  description: "Page not found.",
};

export default function Page() {
  return (
    <Container className="place-self-center py-8">
      <h2 className="text-center text-5xl font-bold leading-tight">
        Sorry, page not found.
      </h2>
      <Link
        href="/"
        className="mt-8 block text-center text-xl underline underline-offset-2 transition-colors hover:text-blue-500 hover:decoration-blue-500"
        aria-label="Return to home page"
      >
        Return Home
      </Link>
    </Container>
  );
}
