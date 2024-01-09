import express from 'express';
const router = express.Router();
import user from '../controller/user.controller';
router.post('/user',user.create);
router.post('/login',user.login);

export default router;