// 投稿作成
import type { NextApiRequest, NextApiResponse } from "next";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../Firebase/firebase";

// curl http://localhost:3000/api/post/i1HYf7RacuPTl1Z77mC4
// 1記事閲覧

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

    const { post_id } = req.query
    console.log(req.query);
    console.log(post_id);
    
    const docRef = doc(db, "posts", post_id + '');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

    res.status(200).json(docSnap.data());
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}
