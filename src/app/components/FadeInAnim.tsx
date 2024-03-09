'use client'
import { motion } from "framer-motion"
import  JSXNodeProp from '@/app/types'


export default function FadeInAnim({children}:JSXNodeProp) {
    return (
      <motion.div animate={{opacity: [0,1]}} transition={{ ease: "easeOut", duration: 2 }} className="flex flex-col justify-center items-center">  
      {children}
      </motion.div>
    );
  }
  