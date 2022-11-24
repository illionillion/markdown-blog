// 投稿作成
import type { NextApiRequest, NextApiResponse } from "next";
import { collection, addDoc, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { PostList } from "../../models/typePost";

export const getPosts = async () => {
  const data: PostList = [];

  // データの取得
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    // data[doc.id] = doc.data()
    data.push({ id: doc.id, data: doc.data() });
  });

  return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await getPosts();

    // console.log(data);
    res.setHeader("Content-Type", "application/json;charset=utf-8;");
    res.status(200).json(data);
    // res.status(200).json({data: data});
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}
