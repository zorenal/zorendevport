'use client'
import Link from "next/link";

export default function Navbar() {
  return (
    <nav >
      <div className="fixed flex p-2">
        <ul className='text-2xl space-y-1'>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Projects</Link>
          </li>
          <li>
            <Link href="" target='_blank'>Resume</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/zorenlabrador1999/" target='_blank'>LinkedIn</Link>
          </li>
          <li>
            <Link href="https://github.com/zorenal" target='_blank'>Github</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
