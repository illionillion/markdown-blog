import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { app } from "../../../Firebase/firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        if (req.method !== 'POST') {
            return res.status(405)
        }

        const auth = getAuth(app)
        const userAuth = await signInWithEmailAndPassword(auth, req.body.email, req.body.password) // ここでログイン
        console.log(userAuth);

        return res.status(200).json(userAuth.user)
        

    } catch (error) {
        
        return res.status(500).json(error) 
    }
}
