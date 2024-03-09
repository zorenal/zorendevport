"use client";

import { motion } from "framer-motion";
import {JSXNodeProp} from "@/app/types";
import Image from "next/image";

export default function TechStack({ children }: JSXNodeProp) {
  return (
    <motion.button
      style={{ color: "#159ae2", textDecoration: "underline" }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
}
