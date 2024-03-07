import Link from "next/link";
import NavAnim from "./NavAnim";

export default function Navbar() {
  return (
    <nav>
   
        <div className="fixed flex p-5 z-10">
          <ul className="text-2xl">
            <li className="p-3">
              <NavAnim>
              <Link href="#about" className="nav-link font" data-hover="About">About</Link>
              </NavAnim>
            </li>
            <li className="p-3">
            <NavAnim>
              <Link href="#work" className="nav-link" data-hover="Work">Work</Link>
              </NavAnim>
            </li>
            <li className="p-3">
            <NavAnim>
              <Link href="/zoren_resume.pdf" target="_blank" className="nav-link" data-hover="Resume">Resume</Link>
              </NavAnim>
            </li>
            <li className="p-3">
            <NavAnim>
              <Link href="https://www.linkedin.com/in/zorenlabrador1999/" target="_blank" className="nav-link" data-hover="LinkedIn">LinkedIn</Link>
              </NavAnim>
            </li>
            <li className="p-3">
            <NavAnim>
              <Link href="https://github.com/zorenal" target="_blank" className="nav-link" data-hover="Github">Github</Link>
              </NavAnim>
            </li>
          </ul>
        </div>
    
    </nav>
  );
}