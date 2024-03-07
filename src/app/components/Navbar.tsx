import Link from "next/link";
import NavScroll from "./NavScroll";

export default function Navbar() {
  return (
    <nav>
      <NavScroll>
        <div className="fixed flex p-5">
          <ul className="text-2xl">
            <li className="p-3">
              <Link href="/" className="nav-link font" data-hover="About">About</Link>
            </li>
            <li className="p-3">
              <Link href="" className="nav-link" data-hover="Work">Work</Link>
            </li>
            <li className="p-3">
              <Link href="" target="_blank" className="nav-link" data-hover="Resume">Resume</Link>
            </li>
            <li className="p-3">
              <Link href="https://www.linkedin.com/in/zorenlabrador1999/" target="_blank" className="nav-link" data-hover="LinkedIn">LinkedIn</Link>
            </li>
            <li className="p-3">
              <Link href="https://github.com/zorenal" target="_blank" className="nav-link" data-hover="Github">Github</Link>
            </li>
          </ul>
        </div>
      </NavScroll>
    </nav>
  );
}