import { firestore, initializeApp } from "firebase-admin"
import { cert } from "firebase-admin/app"
import { getFirestore } from "firebase/firestore"

const apps = getApps()

const app =
    apps.length > 0
    ? app[0]
    : initializeApp({
        credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            priviateKey: process.env.FIREBASE_PRIVATE_KEY,	
        }),
    })

    export default firestore = getFirestore(app)