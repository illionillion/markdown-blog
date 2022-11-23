// 投稿作成
import type { NextApiRequest, NextApiResponse } from "next";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../Firebase/firebase";

// curl -X POST -H "Content-Type: application/json" -d '@requestpostcreate.json' http://localhost:3000/api/post/create

// 記事作成

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(404).json({ msg: "not found" });
    }

    const data = {
      postId: 0,
      title: req.body.title,
      keywords: req.body.keywords,
      content: req.body.content,
      postdate: new Date(),
      updateDate: new Date(),
      // postdate: serverTimestamp(),
      // updateDate: serverTimestamp(),
      userId: req.body.userId,
    };

    await addDoc(collection(db, "posts"), data);

    res.status(200).json({ msg: "success!!" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}
