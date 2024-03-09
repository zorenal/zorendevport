'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavAnim from './NavAnim';
import { MobileNavBar } from './MobileNavBar';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "/zoren_resume.pdf", label: "Resume" },
    { href: "https://www.linkedin.com/in/zorenlabrador1999/", label: "LinkedIn" },
    { href: "https://github.com/zorenal", label: "Github" }
  ];

  // useEffect(() => {
  //   // Check if screen width is less than 768px (typical mobile breakpoint)
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };
  //   handleResize(); // Set initial value
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <nav>
      {isMobile && <MobileNavBar />}
      <div className="fixed flex p-5 z-10">
        <ul className={`text-base md:text-lg lg:text-2xl ${isMobile ? 'hidden' : 'block'}`}>
          {navLinks.map((link, index) => (
            <li className="p-3" key={index}>
              <NavAnim>
                <Link href={link.href} target="_blank" className="nav-link" data-hover={link.label}>
                  {link.label}
                </Link>
              </NavAnim>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}