import { Schema, model } from "mongoose";
import {INotes} from '../interface/notes.interface';

const schema = new Schema<INotes>({
    title:{
        type:String,
        required:[true, 'title required']
    },
    description:{
        type:String,
        required:[true, 'description required']
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'users',
        required:[true, 'user id required']
    },
    createAt:{
        type:Number,
        default:Date.now()
    }
})


export default model<INotes>('note',schema);