import React from "react";
import Recommended from "../../components/recommended";
import Post from "../../components/post";
import { PostType, RequestType } from "../../type/PostType";

interface IProps {
  data: RequestType | undefined;
}

const Home: React.FC<IProps> = ({ data }) => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="row no-gutters-lg">
            <div className="col-12">
              <h2 className="section-title">Latest Articles</h2>
            </div>
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="row">
                {data &&
                  data.latestPosts &&
                  data.latestPosts.posts.map(
                    (item: PostType, index: number) => {
                      return (
                        <Post
                          data={item}
                          key={index}
                          className={
                            index === 0 ? "col-md-12 mb-4" : "col-md-6 mb-4"
                          }
                        />
                      );
                    }
                  )}
                <div className="col-12">
                  <div className="row">
                    <div className="col-12">
                      <nav className="mt-4">
                        <nav className="mb-md-50">
                          <ul className="pagination justify-content-center">
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#!"
                                aria-label="Pagination Arrow"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="26"
                                  height="26"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                                  />
                                </svg>
                              </a>
                            </li>
                            <li className="page-item active ">
                              {" "}
                              <a href="/" className="page-link">
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              {" "}
                              <a href="#!" className="page-link">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#!"
                                aria-label="Pagination Arrow"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="26"
                                  height="26"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                  />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </nav>
                    </div>
                  </div>
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

export default Home;
