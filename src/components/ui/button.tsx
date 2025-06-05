"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  variant: {
    default: "text-stone-200 bg-slate-900 hover:bg-slate-900/90 ",
    destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90 ",
    outline:
      "text-stone-900 border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 ",
    secondary:
      "text-stone-900 bg-slate-100 text-slate-900 hover:bg-slate-100/80 ",
    ghost: "text-stone-900 hover:bg-slate-100 hover:text-slate-900 ",
    link: "text-slate-900 underline-offset-4 hover:underline ",
    round:
      "text-stone-900 font-bold bg-pink-300 border border-slate-200   flex items-center justify-center",
  },
  size: {
    default: "h-10 rounded-md px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10 rounded-full",
  },
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant;
  size?: keyof typeof buttonVariants.size;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
