import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "bg-glass-bg border border-glass-border backdrop-blur-md rounded-2xl p-6 transition-all duration-300",
                hoverEffect && "hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] hover:border-neon-cyan/50",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
