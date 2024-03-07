"use client";

import { motion } from "framer-motion";
import JSXNodeProp from "../types";
export default function NavScroll({ children }: JSXNodeProp) {
  return (
    <motion.div animate={{ x: [-500, 0] }} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  );
}
