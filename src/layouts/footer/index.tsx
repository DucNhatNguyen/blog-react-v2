import logo from "../../assets/images/main-logo.png";
function Footer() {
  return (
    <footer className="bg-dark mt-5">
      <div className="container section">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center">
            {/* <a className="d-inline-block mb-4 pb-2" href="/">
              <img
                decoding="async"
                className="img-fluid"
                src={logo}
                alt="Reporter Hugo"
              />
            </a> */}
            <ul className="p-0 d-flex navbar-footer mb-0 list-unstyled">
              <li className="nav-item my-0">
                {" "}
                <a className="nav-link" href="#!">
                  Youtube
                </a>
              </li>
              <li className="nav-item my-0">
                {" "}
                <a className="nav-link" href="#!">
                  Facebook
                </a>
              </li>
              <li className="nav-item my-0">
                {" "}
                <a className="nav-link" href="#!">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright bg-dark content">
        Designed &amp; Developed By{" "}
        <a href="https://themefisher.com/">Themefisher</a>
      </div>
    </footer>
  );
}

export default Footer;
