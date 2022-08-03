import Link from "next/link";
import pages from "../data/pages.json";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ol className="navbar-list">
        {pages.map((page) => (
          <li className="navbar-item" key={page.title}>
            <Link href={page.slug}>
              <a className="navbar-link">{page.title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
