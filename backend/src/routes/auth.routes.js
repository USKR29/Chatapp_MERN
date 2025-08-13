
import express from 'express';
import { login, signup } from '../controllers/auth.controllers.js';

const router = express.Router();

router.post('/login', login);

router.post('/signup',signup);

// router.put('/update-profile',requireAuth,updateProfile)

export default router;