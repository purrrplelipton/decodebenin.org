import type { ReactNode } from "react";
import { useInView } from "#/hooks/use-in-view";
import { cn } from "#/lib/utils";

interface AnimateInViewProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animation?:
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "scale"
    | "fade"
    | "throw-out-right"
    | "throw-out-left";
  delay?: number;
  duration?: number;
  threshold?: number;
}

const animationClasses = {
  "fade-up": "translate-y-8 opacity-0",
  "fade-down": "-translate-y-8 opacity-0",
  "fade-left": "-translate-x-8 opacity-0",
  "fade-right": "translate-x-8 opacity-0",
  scale: "scale-95 opacity-0",
  fade: "opacity-0",
  "throw-out-right": "translate-x-96 rotate-12 opacity-0",
  "throw-out-left": "-translate-x-96 -rotate-12 opacity-0",
};

export function AnimateInView({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
  ...props
}: AnimateInViewProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold, triggerOnce: false });
  const animationClass = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        {
          [animationClass]: !isInView,
        },
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
