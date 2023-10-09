import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navigation">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light px-0">
          <a className="navbar-brand order-1 py-0" href="index.html">
            <img
              decoding="async"
              className="img-fluid"
              src={logo}
              alt="Reporter Hugo"
            />
          </a>
          <div className="navbar-actions order-3 ml-0 ml-md-4">
            <button
              aria-label="navbar toggler"
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
            >
              {" "}
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <form
            action="#!"
            className="search order-lg-3 order-md-2 order-3 ml-auto"
          >
            <input
              id="search-query"
              name="s"
              type="search"
              placeholder="Search..."
              autoComplete="off"
            />
          </form>
          <div
            className="collapse navbar-collapse text-center order-lg-2 order-4"
            id="navigation"
          >
            <ul className="navbar-nav mx-auto mt-3 mt-lg-0">
              <li className="nav-item">
                {" "}
                <Link to="/about" className="nav-link">
                  About Me
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Chuyên mục
                </a>
                <div className="dropdown-menu">
                  {" "}
                  <a
                    className="dropdown-item"
                    href="/chuyen-muc/kien-thuc-lap-trinh"
                  >
                    Kiến thức Lập trình
                  </a>
                  <a
                    className="dropdown-item"
                    href="/chuyen-muc/cuoc-song-lap-trinh"
                  >
                    Cuộc sống lập trình
                  </a>
                  <a className="dropdown-item" href="/chuyen-muc/hahahahaha">
                    Hahahaha
                  </a>
                </div>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/lien-he" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
