import type { Timestamp } from "firebase/firestore";

export default interface _Post {
    id:string; // document id from firebase
    title:string; // title of article
    description:string; // description of article
    content:string; // html content in article
    date:Timestamp; // date article created
}