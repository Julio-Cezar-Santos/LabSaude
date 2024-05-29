import {Router} from 'express';
import {authMiddleware} from '../middleware/auth.middleware.js';
import {adminMiddleware} from '../middleware/admin.middleware.js';
import {validID} from '../middleware/global.middleware.js';
import examController from '../controllers/exam.controller.js';

const router = Router();

router.post('/', authMiddleware, adminMiddleware, examController.createExamController);
router.get('/', authMiddleware, adminMiddleware, examController.getExamsController);
router.get('/user', authMiddleware, examController.getExamsByUserController);
router.get('/:id', authMiddleware, adminMiddleware, validID, examController.getExamByIdController);
router.put('/:id', authMiddleware, adminMiddleware, examController.updateExamController);
router.delete('/:id', authMiddleware, adminMiddleware, examController.deleteExamController);
export default router;