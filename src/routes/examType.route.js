import {Router} from 'express';
import examTypeController from '../controllers/examType.controller.js';
import {authMiddleware} from '../middleware/auth.middleware.js';
import {adminMiddleware} from '../middleware/admin.middleware.js';
import {validID} from '../middleware/global.middleware.js';


const router = Router();

router.post('/', authMiddleware, adminMiddleware, examTypeController.createExamType);
router.get('/', authMiddleware, examTypeController.getExamType);
router.put('/:id', authMiddleware, adminMiddleware, validID, examTypeController.updateExamType);
router.delete('/:id', authMiddleware, adminMiddleware, validID, examTypeController.deleteExamType);
export default router;