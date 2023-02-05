import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import ArrowRight from "../icons/arrow-right";

export default function KnowMore({ children, path }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      }}
      className="w-full"
    >
      <Link href={path}>
        <div className="flex flex-row items-center gap-4 md:pt-6 cursor-pointer justify-start">
          <div className="link text-dark-2 dark:text-accent-1">{children}</div>
          <div>
            <ArrowRight />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
