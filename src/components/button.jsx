import { classNames } from "@/functions/class-names";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-800 text-white hover:bg-blue-600",
        destructive: "bg-red-700 text-red-100 hover:bg-red-700/90",
        outline: "border hover:bg-gray-100 hover:text-black",
        secondary: "bg-green-800 text-white hover:bg-green-600",
        ghost: "hover:bg-white hover:text-black",
        cancel: "text-red-800 underline-offset-4 hover:underline",
        link: "text-blue-800 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={classNames(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button };
