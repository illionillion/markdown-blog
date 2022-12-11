import { addDoc, collection } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import { app, db } from "../../../Firebase/firebase";
import { User } from "../../../models/typeUser";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"


// curl -X POST -H "Content-Type: application/json" -d '@requestsignupuser.json' http://localhost:3000/api/auth/signup

// アカウント作成
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
    try {
        if (req.method !== 'POST') {
            return res.status(405)
        }
        
        console.log(req.body);
    
        
        const auth = getAuth(app)
        const userAuth = await createUserWithEmailAndPassword(auth, req.body.email, req.body.password) // ここでアカウント作成
        
        console.log(userAuth.user.uid); // uid
        
        const data: User = {
            id: userAuth.user.uid,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    
        const user = await addDoc(collection(db, "users"), data); // ユーザーテーブルに登録
        console.log(user.id);
        
        // return res.status(200).json({msg: 'success', id: user.user.uid})
        return res.status(200).json({msg: 'success'})

    } catch (error) {
        
        return res.status(500).json(error)
    }

}