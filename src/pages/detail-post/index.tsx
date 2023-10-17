import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Recommended from "../../components/recommended";
import Breadcrumbs from "../../components/breadcrumbs";
import { PostDetaiType } from "../../type/PostDetailType";
import http from "../../common/http-common";

function Detail() {
  const [post, setPost] = useState<PostDetaiType>();
  const { postId } = useParams();
  let location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      http
        .get<PostDetaiType>(
          `https://blog-nodejs.onrender.com/api/web/post/${postId}`
        )
        .then(({ data }) => {
          console.log(data);
          setPost(data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <section className="section show">
        <div className="container">
          <Breadcrumbs pathname={location.pathname} />
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <article>
                <img
                  loading="lazy"
                  decoding="async"
                  src={post?.thumbnail}
                  alt="Post Thumbnail"
                  className="w-100"
                />
                <ul className="post-meta mb-2 mt-4">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      style={{ marginRight: "5px", marginTop: "-4px" }}
                      className="text-dark"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 10.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                      <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                    </svg>{" "}
                    <span>{post?.publicdate}</span>
                  </li>
                </ul>
                <h1 className="my-3">{post?.title}</h1>
                <ul className="post-meta mb-4">
                  <li>
                    {" "}
                    <a href="/categories/destination">destination</a>
                  </li>
                </ul>
                <div className="content text-left">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post?.content as string,
                    }}
                  ></div>
                </div>
              </article>
            </div>
            <Recommended />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Detail;
