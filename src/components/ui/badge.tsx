import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:focus:ring-gray-300 tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900",
        blue: "bg-blue-500 text-gray-50",
        purple: "bg-purple-500 text-gray-50",
        red: "bg-red-500 text-gray-50",
        green: "bg-green-500 text-gray-50",
        yellow: "bg-yellow-500 text-gray-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
