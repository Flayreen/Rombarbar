import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {IPagination} from "@/types/pagination/IPagination.ts";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <ChevronRightIcon />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export default function PaginationLayout({ pagination, handlePaginate }: { pagination: IPagination, handlePaginate: (page: number) => void }) {
  const { currentPage, lastPage, hasPreviousPage, hasNextPage } = pagination;

  const getVisiblePages = (): number[] => {
    if (Object.keys(pagination).length) {
      if (lastPage <= 5) {
        return Array.from({ length: lastPage }, (_, i: number): number => i + 1);
      }

      if (currentPage <= 3) {
        return [1, 2, 3, 4];
      }

      if (currentPage >= lastPage - 2) {
        return [lastPage - 3, lastPage - 2, lastPage - 1, lastPage];
      }

      return [currentPage - 1, currentPage, currentPage + 1];
    } else {
      return []
    }
  };

  const onPageChange = (page: number): void => {
    handlePaginate(page);
  }

  const visiblePages: number[] = getVisiblePages();

  return (
      <Pagination>
        <PaginationContent>
          <PaginationItem onClick={hasPreviousPage ? () => onPageChange(currentPage - 1) : () => {}}>
            <PaginationPrevious href="#" />
          </PaginationItem>

          {visiblePages[0] > 1 ? (
              <>
                <PaginationItem onClick={() => onPageChange(1)}>
                  <PaginationLink className={cn("text-xl font-light cursor-pointer", currentPage === 1 ? "text-black" : "text-black/40")}>1</PaginationLink>
                </PaginationItem>
                {visiblePages[0] > 2 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                )}
              </>
          ) : null}

          {visiblePages.map((page: number) => (
              <PaginationItem key={page} onClick={() => onPageChange(page)}>
                <PaginationLink className={cn("text-xl font-light cursor-pointer", page === currentPage ? "text-black" : "text-black/40")}>{page}</PaginationLink>
              </PaginationItem>
          ))}

          {visiblePages[visiblePages.length - 1] < lastPage && (
              <>
                {visiblePages[visiblePages.length - 1] < lastPage - 1 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                )}
                <PaginationItem onClick={() => onPageChange(lastPage)}>
                  <PaginationLink className={cn("text-xl font-light cursor-pointer", currentPage === lastPage ? "text-black" : "text-black/40")}>{lastPage}</PaginationLink>
                </PaginationItem>
              </>
          )}

          <PaginationItem onClick={hasNextPage ? () => onPageChange(currentPage + 1) : () => {}}>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
