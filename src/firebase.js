// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, getDoc, getDocs, getFirestore, setDoc, query, where } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { firebaseConfig } from './firebase-conf'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firestore Database
export const auth = getAuth(app)


// Firebase Storage
const storage = getStorage(app)


// ========================================== Firestore functions ==========================================
export const onSignOut = async () => await signOut(auth)
export const createUser = async (email, pass, firstName, lastName, admin = false) => {
    return createUserWithEmailAndPassword(auth, email, pass).then((cred) => {
        return setDoc(doc(db, "Users", cred.user.uid), {
            FirstName: firstName,
            LastName: lastName,
            tasks: [],
            admin: admin
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

export const getQueryDb = (colName, { field, eq, value }) => {
    return getDocs(query(collection(db, colName), where(field, eq, value)))
}

export const setDb = async (colName, docName, newData) => {
    return setDoc(doc(db, colName, docName), newData)
}


// ========================================== Storage functions ==========================================
export const uploadToStorage = async (userId, file) => {
    const storagePath = `${userId}/${file.name}`
    const storageRef = ref(storage, storagePath)

    try {
        await uploadBytes(storageRef, file)
        const dlUrl = await getDownloadURL(storageRef)
        return dlUrl
    } catch (e) {
        throw e
    }
}

export const uploadToStorageResumeable = (userId, file, upload) => {
    const storagePath = `${userId}/${file.name}`
    const storageRef = ref(storage, storagePath)

    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on('state_changed', 
        upload.handler,
        upload.error,
        () => getDownloadURL(uploadTask.snapshot.ref).then(upload.complete)
    )
}