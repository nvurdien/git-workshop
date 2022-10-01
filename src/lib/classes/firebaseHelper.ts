import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { writable } from "svelte/store";
import type { _Post } from "../interfaces";

export default class FirebaseHelper {
    // Config information to use specific firebase project
    private firebaseConfig = {
        authDomain: "<PROJECT_ID>.firebaseapp.com",
        projectId: "<PROJECT_ID>",
    };
    
    // Initialize Firebase
    private app = initializeApp(this.firebaseConfig);
    
    // Initialize Cloud Firestore and get a reference to the service
    private db = getFirestore(this.app);

    // Use to store posts in order to not need to recall from database to get new added posts
    private p = {};

    // Use writable to add state which will help reload page on retrieval of posts
    posts = writable({}, );

    constructor() {
        this.getPosts();
    }

    getPosts() {
        const posts = {}
        // Get all docs and loop through the snapshots to update posts dictionary
        getDocs(collection(this.db, "post")).then(docSnap => {
            docSnap.forEach(doc => {
                posts[doc.id] = {id: doc.id, ...doc.data()};
                this.posts.set(posts);
                this.p = posts;
            });
        });
    }

    addPost(post) {
        // Add a new document with a new generated id.
        addDoc(collection(this.db, "post"), post).then(docRef => docRef.id).then(postId => {
            const posts = this.p;
            posts[postId] = {id: postId, ...post};
            this.posts.set(posts);
        });
    }
}