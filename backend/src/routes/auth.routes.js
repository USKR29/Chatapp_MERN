
import express from 'express';
import { allUsers, login, signup } from '../controllers/auth.controllers.js';
import User from '../models/user.model.js';

const router = express.Router();

router.post('/login', login);

router.post('/signup',signup);

router.get('/users',allUsers);

// router.put('/update-profile',requireAuth,updateProfile)

export default router;