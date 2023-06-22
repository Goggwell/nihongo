interface ICoverImage {
  picture: string;
  hash: string;
}

interface IAuthor {
  name: string;
  picture: string;
  hash: string;
}

export interface IPost {
  author: IAuthor;
  coverImage: ICoverImage;
  date: string;
  excerpt: string;
  name: string;
  slug: string;
  title: string;
  _id: string;
  body: any;
}

export interface IPosts {
  posts: IPost[];
}
