import { Request, Response } from 'express';
import USER from '../model/user.model';
import Res from '../helpers/response';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { SECRETKEY } from '../const'
class User {
    async create(req: Request, res: Response) {
        try {
            const body = req.body;
            const user = new USER({
                ...body
            });
            await user.save();
            Res(res, { data: user, message: "User created successfully", type: "SUCCESS" })
        } catch (error: any) {
            Res(res, { message: error.message, type: "BAD_REQUEST" })
        }
    }
    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return Res(res, { message: "Pls enter missing field", type: "BAD_REQUEST" })
            }
            const user = await USER.findOne({ email }).select('+password');
            if (!user) {
                return Res(res, { message: "User not access pls signup", type: "BAD_REQUEST" })
            }
            const checkPassword = bcrypt.compareSync(password, user.password!);
            if (!checkPassword) {
                return Res(res, { message: "Enter data is incorrect try again", type: "BAD_REQUEST" })
            }
            const token = jsonwebtoken.sign({ user }, SECRETKEY!, { expiresIn: '24h' })
            Res(res, { data: { token }, message: "User Login successfully", type: "SUCCESS" })
        } catch (error: any) {
            Res(res, { message: error.message, type: "BAD_REQUEST" })
        }
    }
}

export default new User();