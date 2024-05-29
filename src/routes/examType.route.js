const { Router } = require('express');
const examTypeController = require('../controllers/examType.controller');
const { authMiddleware } = require('../middleware/auth.middleware');
const { adminMiddleware } = require('../middleware/admin.middleware');
const { validID } = require('../middleware/global.middleware');

const router = Router();

router.post('/', authMiddleware, adminMiddleware, examTypeController.createExamType);
router.get('/', authMiddleware, examTypeController.getExamType);
router.put('/:id', authMiddleware, adminMiddleware, validID, examTypeController.updateExamType);
router.delete('/:id', authMiddleware, adminMiddleware, validID, examTypeController.deleteExamType);

module.exports = router;