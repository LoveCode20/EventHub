import express from 'express';
import { registerUser, authUser, recoverPassword } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', authUser);
router.post('/recover', recoverPassword);

export default router;
