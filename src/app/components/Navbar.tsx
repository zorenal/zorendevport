import React from "react";
import Link from "next/link"
import NavAnim from "./NavAnim";
import MobileNavBar from "./MobileNavBar";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "/zoren_resume.pdf", label: "Resume" },
  { href: "https://www.linkedin.com/in/zorenlabrador/", label: "LinkedIn" },
  { href: "https://github.com/zorenal", label: "Github" },
  { href: "https://medium.com/@zorenal", label: "Medium"},
  { href: "mailto:zalabrador@gmail.com", label: "Email" }
]

export default function Navbar() {

  const newTab = (link: {href: string}) => {
    return link.href.endsWith('.pdf') || link.href.startsWith('http');
  };

  return (
    <nav>
      <div className="md:hidden lg:hidden">
        <MobileNavBar links={links} />
      </div>
      <div className="fixed flex p-5">
        <ul className="text-base md:text-lg lg:text-xl">
          {links.map((link, index) => (
            <li className="p-3 xs:hidden sm:hidden" key={index}>
              <NavAnim>
                <Link href={link.href} className="nav-link font-medium" data-hover={link.label} target={newTab(link) ? '_blank' : undefined}>{link.label}</Link>
              </NavAnim>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}