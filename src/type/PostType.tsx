export interface RequestType {
  features: [
    id: String,
    author: Number,
    publicdate: String,
    sortdesc: String,
    status: Number,
    thumbnail: String,
    view: Number,
    slug: String,
    title: String,
    ishotblog: String,
    createdAt: String,
    statusname: String,
    cate: {
      id: Number;
      title: String;
    },
    author_author: {
      id: Number;
      name: String;
    }
  ];
  latestPosts: {
    posts: [
      id: String,
      author: Number,
      publicdate: String,
      sortdesc: String,
      status: Number,
      thumbnail: String,
      view: Number,
      slug: String,
      title: String,
      ishotblog: String,
      createdAt: String,
      statusname: String,
      cate: {
        id: Number;
        title: String;
      },
      author_author: {
        id: Number;
        name: String;
      }
    ];
    total: Number;
  };
}

export interface PostType {
  id: String;
  author: Number;
  publicdate: String;
  sortdesc: String;
  status: Number;
  thumbnail: String;
  view: Number;
  slug: String;
  title: String;
  ishotblog: String;
  createdAt: String;
  statusname: String;
  cate: {
    id: Number;
    title: String;
  };
  author_author: {
    id: Number;
    name: String;
  };
}
