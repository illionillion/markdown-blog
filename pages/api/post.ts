// 投稿作成
import type { NextApiRequest, NextApiResponse } from "next";
import { collection, addDoc, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

// データの一覧を取得したい

type PostList = {
    [id: string]: DocumentData
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

    const data: PostList = {}

    // データの取得
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        data[doc.id] = doc.data()
    });

    res.status(200).json(data);
    
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}
