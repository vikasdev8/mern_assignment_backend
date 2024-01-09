import mongoose, {MongooseError} from "mongoose";
import {MONGODBURL} from './const';

    mongoose.connect(MONGODBURL!)
    .then(()=>{
        console.log('DB connected')
    })
    .catch((error:MongooseError)=>{
        console.log('DB Error: ', error.message ," ", error.stack)
    })
