"use client";

import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getBlog, isSlug, isTopic, Topic } from "@/lib/blogs";

import { Container } from "./container";
import { BlogLogo } from "./icons/blog-logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export function Header() {
  const segments = useSelectedLayoutSegments().filter(
    (s) => !s.startsWith("("),
  );

  const segment: string | undefined = segments[0];

  return (
    <header>
      <Container className="flex items-center justify-between py-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" aria-label="Go to home page">
                  <BlogLogo className="size-16" />
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {isTopic(segment) && <TopicBreadcrumbItem topic={segment} isPage />}
            {isSlug(segment) && (
              <>
                <TopicBreadcrumbItem topic={getBlog(segment).topic} />
                <BreadcrumbSeparator className="hidden sm:block" />
                <BreadcrumbItem className="hidden w-[300px] truncate sm:block">
                  <BreadcrumbPage>{getBlog(segment).title}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        <ThemeToggle className="hidden md:flex" />

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"secondary"}
                size={"icon"}
                className="rounded-full"
              >
                <MoreHorizontal className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="md:hidden">
              <ThemeToggle />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Container>
    </header>
  );
}

function TopicBreadcrumbItem({
  topic,
  isPage,
}: {
  topic: Topic;
  isPage?: boolean;
}) {
  return (
    <>
      <BreadcrumbSeparator />

      <BreadcrumbItem>
        {isPage ? (
          <BreadcrumbPage className="capitalize">{topic}</BreadcrumbPage>
        ) : (
          <BreadcrumbLink asChild>
            <Link
              href={`/${topic}`}
              className="flex items-center gap-0.5 capitalize"
              aria-label={`Go to topics page`}
            >
              {topic}
            </Link>
          </BreadcrumbLink>
        )}
      </BreadcrumbItem>
    </>
  );
}
