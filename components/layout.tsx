import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
