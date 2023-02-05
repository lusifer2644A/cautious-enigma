import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

export function ContainedButton({ children, path }) {
  return (
    <motion.div
      whileHover={{
        y: -2,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
    >
      <Link href={path}>
        <div className="px-4 py-3 bg-dark-1 dark:bg-light-1 rounded-lg cursor-pointer">
          <p className="body-3 text-light-1 dark:text-dark-1">{children}</p>
        </div>
      </Link>
    </motion.div>
  );
}
