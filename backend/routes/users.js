import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// upadte USer
router.put('/:id', verifyUser, updateUser);

// delete USer
router.delete('/:id', verifyUser, deleteUser);

// get single USer
router.get('/:id', verifyUser, getSingleUser);

//get all USer
router.get('/', verifyAdmin, getAllUser);

export default router;
