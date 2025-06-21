"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);

  // Using direct color values instead of CSS variables
  const colors = [
    "rgb(231, 222, 202)", // base beige      → #e7deca
    "rgb(214, 197, 166)", // soft beige      → #d6c5a6
    "rgb(194, 188, 174)", // muted beige     → #c2bcae
    "rgb(200, 183, 144)", // accent beige    → #ceb792
    "rgb(184, 159, 128)", // strong accent   → #b89f80
    "rgb(245, 242, 231)", // lightest beige  → #f5f2e7
    "rgb(218, 204, 179)", // warm beige mix  → #daccb3
    "rgb(213, 198, 170)", // soft sandy      → #d5c6aa
    "rgb(239, 231, 214)", // ivory-ish beige → #efe7d6
  ];

  const borderColor = "border-beige-accent/50";


  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className={`w-16 h-8 border-l ${borderColor} relative`}
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className={`w-16 h-8 border-r border-t ${borderColor} relative"`}
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);