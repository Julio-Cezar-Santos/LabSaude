import {Router} from 'express';
import userController from '../controllers/user.controller.js';
import {authMiddleware} from '../middleware/auth.middleware.js';
import {adminMiddleware} from '../middleware/admin.middleware.js';

const router = Router();

import { validID, validUser } from '../middleware/global.middleware.js';

router.post('/', userController.createUser);
router.get('/', authMiddleware, adminMiddleware, userController.getAllUsers);
router.get('/:id', authMiddleware, adminMiddleware, validID, validUser, userController.getUserById);
router.put('/:id', authMiddleware, validID, validUser, userController.updateUser);

export default router;