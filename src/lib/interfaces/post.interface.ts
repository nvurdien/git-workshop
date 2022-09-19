import type { Timestamp } from "firebase/firestore";

export default interface _Post {
    id:string;
    title:string;
    description:string;
    content:string;
    date:Timestamp;
}