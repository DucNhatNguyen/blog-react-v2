export interface PostDetaiType {
  id: string;
  author: Number;
  publicdate: string;
  status: Number;
  thumbnail: string;
  view: Number;
  slug: string;
  title: string;
  content: string;
  cate: {
    id: Number;
    title: string;
  };
  author_author: {
    id: Number;
    name: string;
    avatar: string;
    bio: string;
    facebook: string;
    youtube: string;
  };
}
