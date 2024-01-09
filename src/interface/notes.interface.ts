import { Schema } from "mongoose";

export interface INotes {
    _id:Schema.Types.ObjectId
    title:string,
    description:string,
    createdBy:Schema.Types.ObjectId,
    createAt:number,
}