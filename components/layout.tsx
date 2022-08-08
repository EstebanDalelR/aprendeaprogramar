import Navbar from "./navbar";
import Footer from "./footer";
import pages from "../data/pages.json";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Layout({ children }) {
  const router = useRouter();
  const currentPage = pages.findIndex((page) =>
    router.pathname.includes(page.slug)
  );
  return (
    <>
      <div className="layout">
        <Navbar />
        <div className="mainContent">
          <main>{children}</main>
          <div className="page-nav">
            {currentPage >= 1 && (
              <Link href={pages[currentPage - 1]?.slug}>
                <span>
                  {"<"}
                  Anterior:
                  <a className="next-page">{pages[currentPage - 1]?.title}</a>
                </span>
              </Link>
            )}
            {currentPage < pages.length - 1 && (
              <Link href={pages[currentPage + 1]?.slug}>
                <span>
                  Siguiente:{" "}
                  <a className="next-page">{pages[currentPage + 1]?.title}</a>
                  {">"}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
