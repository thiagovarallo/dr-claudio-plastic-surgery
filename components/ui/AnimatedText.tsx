"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ElementType } from "react";

type Props = {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
};

export function AnimatedText({
  text,
  className,
  as: Tag = "span",
  delay = 0,
}: Props) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden pb-[0.12em] align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.72,
              delay: delay + index * 0.055,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : null}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
