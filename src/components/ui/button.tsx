import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

// Define button variants using cva
const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    {
        variants: {
            variant: {
                default: "bg-blue-500 text-white hover:bg-blue-600",
                outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
            },
            size: {
                default: "px-4 py-2",
                lg: "px-6 py-3",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

// Extend ButtonProps to include asChild
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

// Create the Button component with polymorphic support
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp ref={ref} className={buttonVariants({ variant, size, className })} {...props} />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
