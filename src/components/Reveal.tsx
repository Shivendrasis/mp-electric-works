"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

type RevealProps = {
  /** stagger index → delay (0.08s steps), mirrors the original data-d attribute */
  d?: number;
  as?: "div" | "span" | "li" | "section";
} & HTMLMotionProps<"div">;

/**
 * Fade-and-rise-in-on-scroll wrapper. Replaces the original IntersectionObserver
 * `.reveal` behaviour with Framer Motion's `whileInView`.
 */
export default function Reveal({
  d = 0,
  as = "div",
  children,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    return <MotionTag {...rest}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 0.7,
        delay: d * 0.08,
        ease: [0.2, 0.7, 0.2, 1],
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
