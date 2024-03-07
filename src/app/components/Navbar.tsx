import Link from "next/link";
import NavScroll from "./NavScroll";

export default function Navbar() {
  return (
    <nav>
   
        <div className="fixed flex p-5">
          <ul className="text-2xl">
            <li className="p-3">
              <NavScroll>
              <Link href="/" className="nav-link font" data-hover="About">About</Link>
              </NavScroll>
            </li>
            <li className="p-3">
            <NavScroll>
              <Link href="" className="nav-link" data-hover="Work">Work</Link>
              </NavScroll>
            </li>
            <li className="p-3">
            <NavScroll>
              <Link href="/zoren_resume.pdf" target="_blank" className="nav-link" data-hover="Resume">Resume</Link>
              </NavScroll>
            </li>
            <li className="p-3">
            <NavScroll>
              <Link href="https://www.linkedin.com/in/zorenlabrador1999/" target="_blank" className="nav-link" data-hover="LinkedIn">LinkedIn</Link>
              </NavScroll>
            </li>
            <li className="p-3">
            <NavScroll>
              <Link href="https://github.com/zorenal" target="_blank" className="nav-link" data-hover="Github">Github</Link>
              </NavScroll>
            </li>
          </ul>
        </div>
    
    </nav>
  );
}