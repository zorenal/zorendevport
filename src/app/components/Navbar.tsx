import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-end">
      <ul>
        <li>
          <Link href="">About Me</Link>
        </li>
        <li>
          <Link href="">Projects</Link>
        </li>
        <li>
          <Link href="">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}
