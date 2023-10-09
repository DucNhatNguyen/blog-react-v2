import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";
import Recommended from "../../components/recommended";
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
                          src="https://picsum.photos/900/560?random=30"
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
                          src="https://picsum.photos/900/560?random=902"
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
                          src="https://picsum.photos/900/560?random=9032"
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
                          src="https://picsum.photos/900/560?random=906"
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
            <Recommended />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Category;
