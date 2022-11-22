// 投稿作成
import type { NextApiRequest, NextApiResponse } from "next";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../Firebase/firebase";

// curl -X POST -H "Content-Type: application/json" -d '@deletepost.json' http://localhost:3000/api/post/delete
// 削除

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(404).json({ msg: "not found" });
    }

    await deleteDoc(doc(db, "posts", req.body.id));

    res.status(200).json({ msg: "success!!" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}
