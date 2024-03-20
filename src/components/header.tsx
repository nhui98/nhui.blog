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
import { getBlog, isSlug, isTopic } from "@/lib/blogs";

import { Container } from "./container";
import { BlogLogo } from "./icons/blog-logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export function Header() {
  const segments = useSelectedLayoutSegments().filter(
    (s) => !s.startsWith("("),
  );

  const blogTopic: string | undefined = segments[0];
  const blogSlug: string | undefined = segments[1];

  return (
    <header>
      <Container className="flex items-center justify-between py-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">
                  <BlogLogo className="size-16" />
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {isTopic(blogTopic) && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {typeof blogSlug === "string" ? (
                    <BreadcrumbLink asChild>
                      <Link
                        href={`/${blogTopic}`}
                        className="flex items-center gap-0.5 capitalize"
                      >
                        {blogTopic}
                      </Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="capitalize">
                      {blogTopic}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </>
            )}
            {isSlug(blogSlug) && (
              <>
                <BreadcrumbSeparator className="hidden sm:block" />
                <BreadcrumbItem className="hidden w-[300px] truncate sm:block">
                  <BreadcrumbPage>{getBlog(blogSlug).title}</BreadcrumbPage>
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
