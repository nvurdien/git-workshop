import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, getDocs } from "firebase/firestore"; 
import { writable } from "svelte/store";
import type { _Post } from "../interfaces";

export default class FirebaseHelper {
    private firebaseConfig = {
        authDomain: "workshop-7493b.firebaseapp.com",
        projectId: "workshop-7493b",
    };
    
    // Initialize Firebase
    private app = initializeApp(this.firebaseConfig);
    
    // Initialize Cloud Firestore and get a reference to the service
    private db = getFirestore(this.app);

    posts = writable({}, );

    constructor() {
        const posts = {}
        getDocs(collection(this.db, "post")).then(docSnap => {
            docSnap.forEach(doc => {
                posts[doc.id] = {id: doc.id, ...doc.data()};
                this.posts.set(posts);
            });
        });
    }

    addPost(post) {
        // Add a new document with a generated id.
        return addDoc(collection(this.db, "post"), post).then(docRef => docRef.id);
    }
}