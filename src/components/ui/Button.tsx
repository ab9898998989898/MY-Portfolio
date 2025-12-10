import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
                    {
                        "bg-white text-black hover:bg-neon-cyan hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]":
                            variant === "primary",
                        "bg-white/10 border border-glass-border text-white backdrop-blur-md hover:bg-white/20":
                            variant === "secondary",
                        "border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black":
                            variant === "outline",
                        "text-gray-400 hover:text-white": variant === "ghost",
                        "px-4 py-2 text-sm": size === "sm",
                        "px-6 py-3 text-base": size === "md",
                        "px-8 py-4 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };
