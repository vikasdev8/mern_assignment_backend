import express from 'express';
const router = express.Router();
import note from '../controller/notes.controller';
import auth from '../middlewares/auth.middleware';

router.post('/note', auth, note.create);
router.put('/note/:_id', auth, note.update);
router.delete('/note/:_id', auth, note.delete);
router.get('/note', auth, note.getAllNotes);

export default router;