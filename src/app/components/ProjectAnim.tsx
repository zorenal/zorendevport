"use client";

import { motion } from "framer-motion";
import JSXNodeProp from "@/app/types";

export default function ProjectAnim({ children }: JSXNodeProp) {
  return (
    <motion.div>
      {children}
    </motion.div>
  );
}
