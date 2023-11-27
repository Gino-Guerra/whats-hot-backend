import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { apiConnect } from "../secrets.js";


initializeApp({
    credential: cert(apiConnect),
})

export const db = getFirestore()