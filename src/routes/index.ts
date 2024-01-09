import express from 'express';
const router = express.Router();
import userRoute from './user.route';
import notesRoute from './notes.route';

router.use('/', userRoute);
router.use('/', notesRoute);

export default router;