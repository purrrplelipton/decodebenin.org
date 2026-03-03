import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useInView } from "#/hooks/use-in-view";
import { cn } from "#/lib/utils";

type Animation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "fade"
  | "throw-out-right"
  | "throw-out-left";

const animationClasses: Record<Animation, string> = {
  "fade-up": "translate-y-8 opacity-0",
  "fade-down": "-translate-y-8 opacity-0",
  "fade-left": "-translate-x-8 opacity-0",
  "fade-right": "translate-x-8 opacity-0",
  scale: "scale-95 opacity-0",
  fade: "opacity-0",
  "throw-out-right": "translate-x-96 rotate-12 opacity-0",
  "throw-out-left": "-translate-x-96 -rotate-12 opacity-0",
};

type AnimateInViewOwnProps = {
  children?: ReactNode | ((inView: boolean) => ReactNode);
  animation?: Animation;
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
  onInViewChange?: (inView: boolean) => void;
};

type AnimateInViewProps<T extends ElementType = "div"> = {
  as?: T;
} & AnimateInViewOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof AnimateInViewOwnProps | "as" | "children">;

export function AnimateInView<T extends ElementType = "div">({
  as,
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
  triggerOnce = true,
  onInViewChange,
  style,
  ...props
}: AnimateInViewProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const { ref, isInView } = useInView<HTMLElement>({
    threshold,
    triggerOnce,
    onChange: onInViewChange,
  });

  return (
    <Component
      ref={ref as React.Ref<never>}
      className={cn(
        "transition-all ease-out will-change-[translate,opacity]",
        { [animationClasses[animation]]: !isInView },
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        ...style,
      }}
      {...props}
    >
      {typeof children === "function" ? children(isInView) : children}
    </Component>
  );
}
