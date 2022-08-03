import Link from "next/link";
import { useState } from "react";
import pages from "../data/pages.json";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const showNavbar = () => {
    const navbar = document.querySelector(".navbar");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
      setIsOpen(false);
    } else {
      setIsOpen(true);
      navbar.classList.add("show");
    }
  };

  return (
    <nav className="navbar">
      <button className="navbar-button" onClick={() => showNavbar()}>
        {isOpen ? "<" : ">"}
      </button>
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
