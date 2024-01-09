import { Request, Response } from 'express';
import Res from '../helpers/response';
import NOTES from '../model/note.model';
class Notes {
    async create(req:Request,res:Response){
        try {
        const {title,description,user} = req.body;
        console.log(req.body)
        const note = new NOTES({
            title,
            description,
            createdBy:user._id
        });
        await note.save();
        Res(res, {message:"Notes created successfully",type:"SUCCESS"})
        } catch (error:any) {
        Res(res, {message:error.message,type:"BAD_REQUEST"})
        }
    }
    async update(req:Request,res:Response){
        try {
        const {_id} = req.params;
        console.log(_id)
        const body = req.body;
        const note = await NOTES.findByIdAndUpdate(_id,body);
        Res(res, {message:"Notes updated successfully",type:"SUCCESS"})
        } catch (error:any) {
        Res(res, {message:error.message,type:"BAD_REQUEST"})
        }
    }
    async delete(req:Request,res:Response){
        try {
        const {_id} = req.params;
        await NOTES.findByIdAndDelete(_id);
        Res(res, {message:"Delete successfully",type:"SUCCESS"})
        } catch (error:any) {
        Res(res, {message:error.message,type:"BAD_REQUEST"})
        }
    }
    async getAllNotes(req:Request,res:Response){
        try {
        console.log(req.body.user._id)
        const notes = await NOTES.find({createdBy:req.body.user._id}).sort({createAt:"desc"}).lean();
        Res(res, {data:{notes},type:"SUCCESS"})
        } catch (error:any) {
        Res(res, {message:error.message,type:"BAD_REQUEST"})
        }
    }
    
}

export default new Notes();