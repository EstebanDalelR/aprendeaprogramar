import Link from "next/link";
import pages from "../data/pages.json";
export default function Navbar() {
  const showNavbar = () => {
    const navbar = document.querySelector(".navbar-list");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    } else {
      navbar.classList.add("show");
    }
  };

  return (
    <nav className="navbar">
      <button className="navbar-button" onClick={() => showNavbar()}>
        =
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
