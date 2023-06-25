interface ICoverImage {
  picture: string;
  hash: string;
}

interface IAuthor {
  name: string;
  picture: string;
  hash: string;
}

interface IAuthorImage {
  picture: string;
  hash: string;
}

interface ICourseInfo {
  info1: string;
  info2: string;
  info3: string;
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

export interface IAnnouncement {
  description?: string;
  caveat?: string;
}
export interface IFullAuthor {
  name: string;
  slug: string;
  image: IAuthorImage;
  role: string;
  bio: string;
}

export interface ICourse {
  title: string;
  description: string;
  rank: number;
  info: ICourseInfo;
}

export interface ICourses {
  courses: ICourse[];
}

export interface IAbout {
  url: string;
  body: any;
}
