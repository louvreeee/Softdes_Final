// routes/userRoutes.js
import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js'; // Make sure the path is correct

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);

export default router;
