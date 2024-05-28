import {Router} from 'express';
import userController from '../controllers/user.controller.js';

const router = Router();

import { validID, validUser } from '../middleware/global.middleware.js';

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', validID, validUser, userController.getUserById);
router.put('/:id', validID, validUser, userController.updateUser);

export default router;