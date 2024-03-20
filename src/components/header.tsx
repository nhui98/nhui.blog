"use client";

import { ChevronDownIcon } from "lucide-react";
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
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getBlog, isSlug, isTopic, TOPICS } from "@/lib/blogs";

import { Container } from "./container";
import { BlogLogo } from "./icons/blog-logo";
import { TopicIcon } from "./icons/topic-icon";

export function Header() {
  const segments = useSelectedLayoutSegments().filter(
    (s) => !s.startsWith("("),
  );

  const topic: string | undefined = segments[0];
  const blogSlug: string | undefined = segments[1];

  return (
    <header>
      <Container className="flex h-20 items-center pt-0">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">
                  <BlogLogo className="size-16" />
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {isTopic(topic) && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      Topic
                      <ChevronDownIcon className="size-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {TOPICS.map((topic) => (
                        <DropdownMenuItem key={topic}>
                          <TopicIcon topic={topic} className="mr-2 size-6" />
                          <Link href={`/${topic}`} className="capitalize">
                            {topic}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
              </>
            )}
            {isSlug(blogSlug) && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{getBlog(blogSlug).title}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </Container>
    </header>
  );
}
