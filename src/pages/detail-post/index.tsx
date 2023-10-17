import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Recommended from "../../components/recommended";
import Breadcrumbs from "../../components/breadcrumbs";
function Detail() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  let location = useLocation();

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
                  src="https://picsum.photos/900/560?random=1"
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
                    <span>29 May, 2021</span>
                  </li>
                </ul>
                <h1 className="my-3">
                  Top 7 Reasons to Visit Denver this Summer
                </h1>
                <ul className="post-meta mb-4">
                  <li>
                    {" "}
                    <a href="/categories/destination">destination</a>
                  </li>
                </ul>
                <div className="content text-left">
                  <h1 id="heading">Heading</h1>
                  <p>
                    Here is example of hedings. You can use this heading by
                    following markdownify rules. For example: use <code>#</code>{" "}
                    for heading 1 and use <code>######</code> for heading 6.
                  </p>
                  <h2 id="emphasis">Emphasis</h2>
                  <p>
                    Emphasis, aka italics, with <em>asterisks</em> or{" "}
                    <em>underscores</em>.
                  </p>
                  <p>
                    Strong emphasis, aka bold, with <strong>asterisks</strong>{" "}
                    or <strong>underscores</strong>.
                  </p>
                  <p>
                    Combined emphasis with{" "}
                    <strong>
                      asterisks and <em>underscores</em>
                    </strong>
                    .
                  </p>
                  <p>
                    Strikethrough uses two tildes. <del>Scratch this.</del>
                  </p>
                  <h2 id="link">Link</h2>
                  <p>
                    <a href="#!">I&rsquo;m an inline-style link</a>
                  </p>
                  <p>
                    <a href="#!" title="Google's Homepage">
                      I&rsquo;m an inline-style link with title
                    </a>
                  </p>
                  <p>
                    <a href="https://www.themefisher.com">
                      I&rsquo;m a reference-style link
                    </a>
                  </p>
                  <p>
                    <a href="#!">
                      I&rsquo;m a relative reference to a repository file
                    </a>
                  </p>
                  <p>
                    <a href="https://gethugothemes.com">
                      You can use numbers for reference-style link definitions
                    </a>
                  </p>
                  <p>
                    Or leave it empty and use the{" "}
                    <a href="https://www.getjekyllthemes.com">
                      link text itself
                    </a>
                    .
                  </p>
                  <p>
                    URLs and URLs in angle brackets will automatically get
                    turned into links.
                    <a href="http://www.example.com">
                      http://www.example.com
                    </a>{" "}
                    or{" "}
                    <a href="http://www.example.com">http://www.example.com</a>{" "}
                    and sometimes example.com (but not on Github, for example).
                  </p>
                  <p>
                    Some text to show that the reference links can follow later.
                  </p>
                  <hr />
                  <h2 id="paragraph">Paragraph</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam nihil enim maxime corporis cumque totam aliquid nam
                    sint inventore optio modi neque laborum officiis
                    necessitatibus, facilis placeat pariatur! Voluptatem, sed
                    harum pariatur adipisci voluptates voluptatum cumque, porro
                    sint minima similique magni perferendis fuga! Optio vel
                    ipsum excepturi tempore reiciendis id quidem? Vel in,
                    doloribus debitis nesciunt fugit sequi magnam accusantium
                    modi neque quis, vitae velit, pariatur harum autem a! Velit
                    impedit atque maiores animi possimus asperiores natus
                    repellendus excepturi sint architecto eligendi non, omnis
                    nihil. Facilis, doloremque illum. Fugit optio laborum minus
                    debitis natus illo perspiciatis corporis voluptatum rerum
                    laboriosam.
                  </p>
                  <hr />
                  <h2 id="ordered-list">Ordered List</h2>
                  <ol>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                  </ol>
                  <hr />
                  <h2 id="unordered-list">Unordered List</h2>
                  <ul>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                  </ul>
                  <hr />
                  <h3 id="notice">Notice</h3>
                  <div className="notices note">
                    <p>This is a simple note.</p>
                  </div>
                  <div className="notices tip">
                    <p>This is a simple tip.</p>
                  </div>
                  <div className="notices info">
                    <p>This is a simple info.</p>
                  </div>
                  <hr />
                  <hr />
                  <h2 id="blockquote">Blockquote</h2>
                  <blockquote>
                    <p>This is a blockquote example.</p>
                  </blockquote>
                  <hr />
                  <h2 id="inline-html">Inline HTML</h2>
                  <p>
                    You can also use raw HTML in your Markdown, and it&rsquo;ll
                    mostly work pretty well.
                  </p>
                  <dl>
                    {" "}
                    <dt>Definition list</dt>
                    <dd>Is something people use sometimes.</dd>{" "}
                    <dt>Markdown in HTML</dt>
                    <dd>
                      Does *not* work **very** well. Use HTML <em>tags</em>.
                    </dd>
                  </dl>
                  <hr />
                  <h2 id="tables">Tables</h2>
                  <p>Colons can be used to align columns.</p>
                  <table>
                    <thead>
                      <tr>
                        <th>Tables</th>
                        <th style={{ textAlign: "center" }}>Are</th>
                        <th style={{ textAlign: "right" }}>Cool</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>col 3 is</td>
                        <td style={{ textAlign: "center" }}>right-aligned</td>
                        <td style={{ textAlign: "right" }}>$1600</td>
                      </tr>
                      <tr>
                        <td>col 2 is</td>
                        <td style={{ textAlign: "center" }}>centered</td>
                        <td style={{ textAlign: "right" }}>$12</td>
                      </tr>
                      <tr>
                        <td>zebra stripes</td>
                        <td style={{ textAlign: "center" }}>are neat</td>
                        <td style={{ textAlign: "right" }}>$1</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    There must be at least 3 dashes separating each header cell.
                    The outer pipes (|) are optional, and you don&rsquo;t need
                    to make the raw Markdown line up prettily. You can also use
                    inline Markdown.
                  </p>
                  <table>
                    <thead>
                      <tr>
                        <th>Markdown</th>
                        <th>Less</th>
                        <th>Pretty</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <em>Still</em>
                        </td>
                        <td>
                          <code>renders</code>
                        </td>
                        <td>
                          <strong>nicely</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                  <hr />
                  <h2 id="image">Image</h2>
                  <img
                    loading="lazy"
                    decoding="async"
                    className="w-100 d-block mb-4"
                    src="https://picsum.photos/900/560?random=1"
                    alt="error"
                  />
                  <hr />
                  <h2 id="youtube-video">Youtube video</h2>
                  <div
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%",
                      height: 0,
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/DDpXdljhstg"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                      }}
                      title="YouTube Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
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
