import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function RoundedButton({ children, path }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }}
    >
      <Link href={path}>
        <div className="px-6 py-2  text-center accent-grad rounded-lg cursor-pointer">
          <p className="text-dark-1 text-center">{children}</p>
        </div>
      </Link>
    </motion.div>
  );
}
