import { ArrowRight } from "lucide-react";

interface AnimatedArrowProps {
  direction?: "up-right" | "right" | "up";
  size?: number;
  strokeWidth?: number;
  boxClassName?: string;
  className?: string;
  trigger?: "btn" | "card";
}

export function AnimatedArrow({
  direction = "up-right",
  size = 16,
  strokeWidth = 2.4,
  boxClassName = "h-5 w-[17px]",
  className = "",
  trigger = "btn",
}: AnimatedArrowProps) {
  return (
    <span
      data-direction={direction}
      data-trigger={trigger}
      aria-hidden="true"
      className={`arrow-swap relative inline-grid place-items-center overflow-hidden shrink-0 ${boxClassName} ${className}`}
    >
      <ArrowRight
        className="arrow-swap-out absolute"
        size={size}
        strokeWidth={strokeWidth}
        aria-hidden="true"
      />
      <ArrowRight
        className="arrow-swap-in absolute"
        size={size}
        strokeWidth={strokeWidth}
        aria-hidden="true"
      />
    </span>
  );
}

