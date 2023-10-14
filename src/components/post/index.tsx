import { PostType } from "../../type/PostType";

interface IProps {
  data: PostType;
  className: string;
}

const Post: React.FC<IProps> = ({ data, className }) => {
  return (
    <div className={className}>
      <article className="card article-card">
        <a href={`/bai-viet/${data.slug}`}>
          <div className="card-image">
            <div className="post-info">
              {" "}
              <span className="text-uppercase">{data.createdAt}</span>
              <span className="text-uppercase">3 minutes read</span>
            </div>
            <img
              loading="lazy"
              decoding="async"
              src={data.thumbnail}
              alt="Post Thumbnail"
              className="w-100"
            />
          </div>
        </a>
        <div className="card-body px-0 pb-1">
          <ul className="post-meta mb-2">
            <li>
              {" "}
              <a href="#!">travel</a>
              <a href="#!">news</a>
            </li>
          </ul>
          <h2 className="h1">
            <a
              style={{ textDecoration: "none", fontSize: "25px" }}
              className="post-title"
              href={`/bai-viet/${data.slug}`}
            >
              {data.title}
            </a>
          </h2>
          <p className="card-text">{data.sortdesc}</p>
          <div className="content">
            {" "}
            <a className="read-more-btn" href={`/bai-viet/${data.slug}`}>
              Read More <i className="fa fa-angle-double-right"></i>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
export default Post;
