'use client'
import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button onClick={toggle} className='fixed z-10'>
    <svg width="50" height="50" viewBox="0 0 40 40">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 25 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 25 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 25 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);

const background = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.2
    }
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};


const MobileNavBar = ({ links }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      className="p-5 h-full"
    >
      <motion.div className="nav-container" variants={background} animate={isOpen ? "open" : "closed"}>
      
      {isOpen && (
        <ul className="text-base md:text-lg lg:text-2xl z-10">
          {links.map((link, index) => (
            <li className="p-1 z-11" key={index}>
              <Link href={link.href}  className="nav-link font-medium" data-hover={link.label}>{link.label}</Link>
            </li>
          ))}
        </ul>
      )}
</motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MobileNavBar;