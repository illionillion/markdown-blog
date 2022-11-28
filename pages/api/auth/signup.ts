import { addDoc, collection } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import { app, db } from "../../../Firebase/firebase";
import { User } from "../../../models/typeUser";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"


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

    const auth = getAuth(app)
    await createUserWithEmailAndPassword(auth, req.body.email, req.body.password) // ここでアカウント作成

    const user = await addDoc(collection(db, "users"), data);
    console.log(user.id);
    
    return res.status(200).json({msg: 'success', id: user.id})
}