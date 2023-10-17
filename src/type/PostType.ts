export interface RequestType {
  features: [
    id: string,
    author: Number,
    publicdate: string,
    sortdesc: string,
    status: Number,
    thumbnail: string,
    view: Number,
    slug: string,
    title: string,
    ishotblog: string,
    createdAt: string,
    statusname: string,
    cate: {
      id: Number;
      title: string;
    },
    author_author: {
      id: Number;
      name: string;
    }
  ];
  latestPosts: {
    posts: [PostType];
    total: Number;
  };
}

export interface PostType {
  id: string;
  author: Number;
  publicdate: string;
  sortdesc: string;
  status: Number;
  thumbnail: string;
  view: Number;
  slug: string;
  title: string;
  ishotblog: string;
  createdAt: string;
  statusname: string;
  cate: {
    id: Number;
    title: string;
  };
  author_author: {
    id: Number;
    name: string;
  };
}
