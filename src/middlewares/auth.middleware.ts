import { NextFunction, Request, Response } from "express";
import jsonwebtoken from 'jsonwebtoken';
import {SECRETKEY} from '../const';
import Res from '../helpers/response';
export default (req:Request,res:Response, next:NextFunction) => {
    const authorization = (req.headers['authorization'] && req.headers['authorization'].startsWith('Bearer')) ? req.headers['authorization'] : false;
    if(authorization){
        const token = authorization.split(' ')[1];
        console.log(token)
        if(!token){
            return Res(res, {message:"token is not avaiable",type:"UNAUTHORIZED",});
        }
        const {user}:any =  jsonwebtoken.verify(token,SECRETKEY!);
        req.body = {...req.body,user}
        return next(null);
    }
    return Res(res,{message:"Token no avaiable", type:"UNAUTHORIZED"})
}