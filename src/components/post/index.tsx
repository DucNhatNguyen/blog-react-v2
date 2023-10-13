import { PostType } from "../../type/PostType";

interface Props {
  data: PostType;
  index: number;
}

const Post: React.FC<Props> = ({ data, index }) => {
  return (
    <div className="col-12 mb-4">
      <article className="card article-card">
        <a href={`/bai-viet/${index}`}>
          <div className="card-image">
            <div className="post-info">
              {" "}
              <span className="text-uppercase">{data.createdAt}</span>
              <span className="text-uppercase">3 minutes read</span>
            </div>
            <img
              loading="lazy"
              decoding="async"
              src={`https://picsum.photos/900/560?random=${index}`}
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
            <a className="post-title" href={`/bai-viet/${index}`}>
              {data.title}
            </a>
          </h2>
          <p className="card-text">{data.sortdesc}</p>
          <div className="content">
            {" "}
            <a className="read-more-btn" href={`/bai-viet/${index}`}>
              Read Full Article
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
export default Post;
