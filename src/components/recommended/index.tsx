import logoAuthor from "../../assets/images/author.png";
function Recommended() {
  return (
    <div className="col-lg-4">
      <div className="widget-blocks">
        <div className="row">
          <div className="col-lg-12">
            <div className="widget">
              <div className="widget-body">
                <img
                  loading="lazy"
                  decoding="async"
                  src={logoAuthor}
                  alt="About Me"
                  className="w-100 author-thumb-sm d-block"
                />
                <h2 className="widget-title my-3">Mình là Quỳnh!</h2>
                <p className="mb-3 pb-2">
                  Hello, I’m Quynh. A data developer, Developer and Story
                  teller. Working as a Content writter at CoolTech Agency. Quam
                  nihil …
                </p>{" "}
                <a href="/about" className="btn btn-sm btn-outline-primary">
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="widget">
              <div className="widget-body">
                <div className="widget-list>">
                  <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fvuquynh9999%2Fposts%2F842387673803542%3A842387673803542&show_text=true&width=330"
                    width="330"
                    height="390"
                    style={{ border: "none", overflow: "hidden" }}
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-6">
            <div className="widget">
              <h2 className="section-title mb-3">Recommended</h2>
              <div className="widget-body">
                <div className="widget-list">
                  {new Array(5).fill(1).map((value, index) => {
                    if (index === 0) {
                      return (
                        <article className="card mb-4">
                          <div className="card-image">
                            <div className="post-info">
                              {" "}
                              <span className="text-uppercase">
                                1 minutes read
                              </span>
                            </div>
                            <img
                              loading="lazy"
                              decoding="async"
                              src="https://picsum.photos/900/560?random=90"
                              alt="Post Thumbnail"
                              className="w-100"
                            />
                          </div>
                          <div className="card-body px-0 pb-1">
                            <h3>
                              <a
                                className="post-title post-title-sm"
                                href="/bai-viet/top-7-reasons-to-visit-denver-this-summer"
                              >
                                Portugal and France Now Allow Unvaccinated
                                Tourists
                              </a>
                            </h3>
                            <p className="card-text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor …
                            </p>
                            <div className="content">
                              {" "}
                              <a
                                className="read-more-btn"
                                href="/bai-viet/top-7-reasons-to-visit-denver-this-summer"
                              >
                                Read Full Article
                              </a>
                            </div>
                          </div>
                        </article>
                      );
                    }
                    return (
                      <a
                        className="media align-items-center"
                        href="/bai-viet/top-7-reasons-to-visit-denver-this-summer"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          src={`https://picsum.photos/900/560?random=${index}`}
                          alt="Post Thumbnail"
                          className="w-100"
                        />
                        <div className="media-body ml-3">
                          <h3 style={{ marginTop: "-5px" }}>
                            These Are Making It Easier To Visit
                          </h3>
                          <p className="mb-0 small">
                            Heading Here is example of hedings. You can use …
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-6">
            <div className="widget">
              <h2 className="section-title mb-3">Categories</h2>
              <div className="widget-body">
                <ul className="widget-list">
                  <li>
                    <a href="#!">
                      computer<span className="ml-auto">(3)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      cruises<span className="ml-auto">(2)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      destination<span className="ml-auto">(1)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      internet<span className="ml-auto">(4)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      lifestyle<span className="ml-auto">(2)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      news<span className="ml-auto">(5)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      telephone<span className="ml-auto">(1)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      tips<span className="ml-auto">(1)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      travel<span className="ml-auto">(3)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      website<span className="ml-auto">(4)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      hugo<span className="ml-auto">(2)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
