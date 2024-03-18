import Link from "next/link";

import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="place-self-center py-8">
      <h2 className="text-center text-5xl font-bold leading-tight">
        Sorry, page not found.
      </h2>
      <Link
        href="/"
        className="mt-8 block text-center text-xl underline underline-offset-2 transition-colors hover:text-blue-500 hover:decoration-blue-500"
      >
        Return Home
      </Link>
    </Container>
  );
}
