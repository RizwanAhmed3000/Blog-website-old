import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, setDoc, getDoc, getDocs, query, where, deleteDoc, updateDoc, serverTimestamp, orderBy, arrayUnion, arrayRemove, limit,  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
//--------------------------FIREBASE CONFIG APNA USE KRO---------------------------------//

const firebaseConfig = {
    apiKey: "AIzaSyBu0gRcv2NhDDCYXBuZNdvmvvLhbPwZv5s",
    authDomain: "smit-mini-hackathon.firebaseapp.com",
    projectId: "smit-mini-hackathon",
    storageBucket: "smit-mini-hackathon.appspot.com",
    messagingSenderId: "175575935402",
    appId: "1:175575935402:web:c3b719ec9f4d7197b9a3d3"
};

//--------------------------FIREBASE CONFIG APNA USE KRO---------------------------------//

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, getFirestore, collection, addDoc, doc, setDoc, getDoc, getDocs, onAuthStateChanged, signOut, query, where, storage, ref, uploadBytesResumable, getDownloadURL, deleteDoc, updateDoc, serverTimestamp, orderBy, arrayUnion, arrayRemove, limit, EmailAuthProvider, reauthenticateWithCredential, updatePassword, }