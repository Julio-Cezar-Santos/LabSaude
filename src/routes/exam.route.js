const { Router } = require('express');
const examController = require('../controllers/exam.controller');
const { authMiddleware, adminMiddleware, validID } = require('../middleware/global.middleware');

const router = Router();

router.post('/', authMiddleware, adminMiddleware, examController.createExamController);
router.get('/', authMiddleware, adminMiddleware, examController.getExamsController);
router.get('/user', authMiddleware, examController.getExamsByUserController);
router.get('/:id', authMiddleware, adminMiddleware, validID, examController.getExamByIdController);
router.put('/:id', authMiddleware, adminMiddleware, examController.updateExamController);
router.delete('/:id', authMiddleware, adminMiddleware, examController.deleteExamController);


module.exports = router;