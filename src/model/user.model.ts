import { Schema, model } from "mongoose";
import {IUser} from '../interface/user.interface';
import { NextFunction } from "express";
import hash from 'bcrypt';
const schema = new Schema<IUser>({
    email:{
        type:String,
        required:[true, 'email required'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'password required'],
        select:false
    }
})

schema.pre('save', async function(next:NextFunction){
    if(this.password){
        if(!this.isModified('password')){
            next()
        }
        this.password = await hash.hash(this.password!, 10)
    }
})

export default model<IUser>('user',schema);