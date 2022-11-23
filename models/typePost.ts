import { DocumentData, Timestamp } from "firebase/firestore";

export type PostProps = {
  postId?: number;
  title: string;
  keywords: string;
  content: string;
  // postdate: Date;
  postdate: Timestamp;
  updateDate: Date;
  userId: number;
};

export type PostList = PostData[];

export type PostData = {
  id: string;
  data: DocumentData | PostProps;
};
