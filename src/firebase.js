// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseConfig } from './firebase-conf'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const onSignOut = async () => await signOut(auth)
export const createUser = async (email, pass, firstName, lastName, admin = false) => {
    return createUserWithEmailAndPassword(auth, email, pass).then((cred) => {
        return setDoc(doc(db, "Users", cred.user.uid), {
            FirstName: firstName,
            LastName: lastName,
            ...(admin && { admin })
        }).then(() => cred)
        .catch((e) => console.error(e))
    })
}
export const logUser = async (email, pass) => await signInWithEmailAndPassword(auth, email, pass)

const db = getFirestore(app)
export const getDb = async (colName, docName=null) => {
    if (docName) return getDoc(doc(db, colName, docName))
    else return getDocs(collection(db, colName))
} 
