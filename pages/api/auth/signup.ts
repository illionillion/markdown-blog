import { addDoc, collection } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../Firebase/firebase";
import { User } from "../../../models/typeUser";

// curl -X POST -H "Content-Type: application/json" -d '@requestsignupuser.json' http://localhost:3000/api/user/signup

// アカウント作成
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return
    }

    console.log(req.body);
    

    const data: User = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    const user = await addDoc(collection(db, "users"), data);
    console.log(user.id);
    
    return res.status(200).json({msg: 'success', id: user.id})
}