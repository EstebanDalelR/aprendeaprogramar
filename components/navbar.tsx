export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="/logo.png" alt="Logo" />
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Inicio
          </a>
          <a className="navbar-item" href="/about">
            Acerca de
          </a>
          <a className="navbar-item" href="/contact">
            Contacto
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="button is-primary" href="/">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
