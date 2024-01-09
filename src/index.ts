import express from 'express';
const app = express();
import {PORT} from './const';
import './db';
import route from './routes/index';
import cors from 'cors';
import bodyParser from 'body-parser';
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(cors({
    origin:'*',
    methods:['POST','GET','PUT','DELETE']
}));
app.use('/',route);
process.on('uncaughtException',(err)=>console.log(err));
process.on('unhandledRejection',(err)=>console.log(err));
app.listen(PORT,()=>console.log('server running on 80'))