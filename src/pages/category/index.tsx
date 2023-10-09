import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";
const Category = () => {
  const path = useLocation().pathname;
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Breadcrumbs pathname={path} />
              <h1 className="mb-4 border-bottom border-primary d-inline-block">
                {
                  useLocation().pathname.split("/")[
                    useLocation().pathname.split("/").length - 1
                  ]
                }
              </h1>
            </div>
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <article className="card article-card article-card-sm h-100">
                    <a href="/bai-viet/top-7-reasons-to-visit-denver-this-summer">
                      <div className="card-image">
                        <div className="post-info">
                          {" "}
                          <span className="text-uppercase">04 Jun 2021</span>
                          <span className="text-uppercase">3 minutes read</span>
                        </div>
                        <img
                          loading="lazy"
                          decoding="async"
                          src="images/post/post-1.jpg"
                          alt="Post Thumbnail"
                          className="w-100"
                          width="420"
                          height="280"
                        />
                      </div>
                    </a>
                    <div className="card-body px-0 pb-0">
                      <ul className="post-meta mb-2">
                        <li>
                          {" "}
                          <a href="#!">travel</a>
                          <a href="#!">news</a>
                        </li>
                      </ul>
                      <h2>
                        <a
                          className="post-title"
                          href="/bai-viet/top-7-reasons-to-visit-denver-this-summer"
                        >
                          Is It Ethical to Travel Now? With That Freedom Comes
                          Responsibility.
                        </a>
                      </h2>
                      <p className="card-text">
                        Heading Here is example of hedings. You can use this
                        heading by following markdownify rules. For example: use
                        # for …
                      </p>
                      <div className="content">
                        {" "}
                        <a
                          className="read-more-btn"
                          href="/articles/travel/post-1/"
                        >
                          Read Full Article
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 mb-4">
                  <article className="card article-card article-card-sm h-100">
                    <a href="/bai-viet/top-7-reasons-to-visit-denver-this-summer">
                      <div className="card-image">
                        <div className="post-info">
                          {" "}
                          <span className="text-uppercase">03 Jun 2021</span>
                          <span className="text-uppercase">2 minutes read</span>
                        </div>
                        <img
                          loading="lazy"
                          decoding="async"
                          src="images/post/post-2.jpg"
                          alt="Post Thumbnail"
                          className="w-100"
                          width="420"
                          height="280"
                        />
                      </div>
                    </a>
                    <div className="card-body px-0 pb-0">
                      <ul className="post-meta mb-2">
                        <li>
                          {" "}
                          <a href="#!">travel</a>
                        </li>
                      </ul>
                      <h2>
                        <a
                          className="post-title"
                          href="/bai-viet/top-7-reasons-to-visit-denver-this-summer"
                        >
                          An Experiential Guide to Explore This Kingdom
                        </a>
                      </h2>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna …
                      </p>
                      <div className="content">
                        {" "}
                        <a
                          className="read-more-btn"
                          href="/articles/travel/post-2/"
                        >
                          Read Full Article
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 mb-4">
                  <article className="card article-card article-card-sm h-100">
                    <a href="/bai-viet/top-7-reasons-to-visit-denver-this-summer">
                      <div className="card-image">
                        <div className="post-info">
                          {" "}
                          <span className="text-uppercase">01 Jan 2021</span>
                          <span className="text-uppercase">2 minutes read</span>
                        </div>
                        <img
                          loading="lazy"
                          decoding="async"
                          src="images/post/post-6.jpg"
                          alt="Post Thumbnail"
                          className="w-100"
                          width="420"
                          height="280"
                        />
                      </div>
                    </a>
                    <div className="card-body px-0 pb-0">
                      <ul className="post-meta mb-2">
                        <li>
                          {" "}
                          <a href="#!">travel</a>
                          <a href="#!">news</a>
                        </li>
                      </ul>
                      <h2>
                        <a
                          className="post-title"
                          href="/bai-viet/top-7-reasons-to-visit-denver-this-summer"
                        >
                          Eight Awesome Places to Visit in Montana This Summer
                        </a>
                      </h2>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna …
                      </p>
                      <div className="content">
                        {" "}
                        <a
                          className="read-more-btn"
                          href="/articles/travel/post-3/"
                        >
                          Read Full Article
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 mb-4">
                  <article className="card article-card article-card-sm h-100">
                    <a href="/bai-viet/top-7-reasons-to-visit-denver-this-summer">
                      <div className="card-image">
                        <div className="post-info">
                          {" "}
                          <span className="text-uppercase">01 Jun 2020</span>
                          <span className="text-uppercase">2 minutes read</span>
                        </div>
                        <img
                          loading="lazy"
                          decoding="async"
                          src="images/post/post-8.jpg"
                          alt="Post Thumbnail"
                          className="w-100"
                          width="420"
                          height="280"
                        />
                      </div>
                    </a>
                    <div className="card-body px-0 pb-0">
                      <ul className="post-meta mb-2">
                        <li>
                          {" "}
                          <a href="#!">website</a>
                          <a href="#!">website</a>
                          <a href="#!">hugo</a>
                        </li>
                      </ul>
                      <h2>
                        <a
                          className="post-title"
                          href="/bai-viet/top-7-reasons-to-visit-denver-this-summer"
                        >
                          Portugal and France Now Allow Unvaccinated Tourists
                        </a>
                      </h2>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna …
                      </p>
                      <div className="content">
                        {" "}
                        <a
                          className="read-more-btn"
                          href="/articles/travel/post-4/"
                        >
                          Read Full Article
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget-blocks">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="widget">
                      <div className="widget-body">
                        <img
                          loading="lazy"
                          decoding="async"
                          src="images/author.jpg"
                          alt="About Me"
                          className="w-100 author-thumb-sm d-block"
                        />
                        <h2 className="widget-title my-3">Hootan Safiyari</h2>
                        <p className="mb-3 pb-2">
                          Hello, I’m Hootan Safiyari. A Content writter,
                          Developer and Story teller. Working as a Content
                          writter at CoolTech Agency. Quam nihil …
                        </p>{" "}
                        <a
                          href="about.html"
                          className="btn btn-sm btn-outline-primary"
                        >
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="widget">
                      <h2 className="section-title mb-3">Recommended</h2>
                      <div className="widget-body">
                        <div className="widget-list">
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
                                src="images/post/post-9.jpg"
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
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor …
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
                          <a
                            className="media align-items-center"
                            href="/bai-viet/top-7-reasons-to-visit-denver-this-summer"
                          >
                            <img
                              loading="lazy"
                              decoding="async"
                              src="images/post/post-2.jpg"
                              alt="Post Thumbnail"
                              className="w-100"
                            />
                            <div className="media-body ml-3">
                              <h3 style={{ marginTop: "-5px" }}>
                                These Are Making It Easier To Visit
                              </h3>
                              <p className="mb-0 small">
                                Heading Here is example of hedings. You can use
                                …
                              </p>
                            </div>
                          </a>
                          <a
                            className="media align-items-center"
                            href="/bai-viet/top-7-reasons-to-visit-denver-this-summer"
                          >
                            {" "}
                            <span className="image-fallback image-fallback-xs">
                              No Image Specified
                            </span>
                            <div className="media-body ml-3">
                              <h3 style={{ marginTop: "-5px" }}>
                                No Image specified
                              </h3>
                              <p className="mb-0 small">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing …
                              </p>
                            </div>
                          </a>
                          <a
                            className="media align-items-center"
                            href="/bai-viet/top-7-reasons-to-visit-denver-this-summer"
                          >
                            <img
                              loading="lazy"
                              decoding="async"
                              src="images/post/post-5.jpg"
                              alt="Post Thumbnail"
                              className="w-100"
                            />
                            <div className="media-body ml-3">
                              <h3 style={{ marginTop: "-5px" }}>
                                Perfect For Fashion
                              </h3>
                              <p className="mb-0 small">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing …
                              </p>
                            </div>
                          </a>
                          <a
                            className="media align-items-center"
                            href="/bai-viet/top-7-reasons-to-visit-denver-this-summer"
                          >
                            <img
                              loading="lazy"
                              decoding="async"
                              src="images/post/post-9.jpg"
                              alt="Post Thumbnail"
                              className="w-100"
                            />
                            <div className="media-body ml-3">
                              <h3 style={{ marginTop: "-5px" }}>
                                Record Utra Smooth Video
                              </h3>
                              <p className="mb-0 small">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing …
                              </p>
                            </div>
                          </a>
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
          </div>
        </div>
      </section>
    </main>
  );
};
export default Category;
