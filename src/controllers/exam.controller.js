import examService from "../services/exam.service.js";
import userService from "../services/user.service.js";
import {getExamTypeByIdService} from "../services/examType.service.js";


const createExamController = async (req, res) => {
    const { usuarioId, tipoExameId, dataColeta, resultado } = req.body;
    try {

        if (!usuarioId || !tipoExameId || !dataColeta || !resultado) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const user = await userService.getUserByIdService(usuarioId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const examType = await getExamTypeByIdService(tipoExameId);

        if (!examType) {
            return res.status(404).json({ message: 'Exam Type not found' });
        }

        const dataColetaISO = new Date(dataColeta.split('/').reverse().join('-'));

        const exam = await examService.createExamService(usuarioId, tipoExameId, dataColetaISO, resultado);

        const examPopulated = await examService.getExamByIdService(exam._id);

        res.status(201).json({message: 'Exam created', exam: examPopulated});
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}

const getExamsController = async (req, res) => {
    try {
        const exams = await examService.getExamService();
        res.status(200).json(exams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getExamByIdController = async (req, res) => {
    try {
        const exam = await examService.getExamByIdService(req.params.id);
        if (exam) {
            res.status(200).json(exam);
        } else {
            res.status(404).json({ message: 'Exam not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getExamsByUserController = async (req, res) => {
    try {
        const exams = await examService.getExamsByUserIdService(req.user.id);
        res.status(200).json(exams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateExamController = async (req, res) => {
    try {
        const updateData = req.body;
        if (updateData.dataColeta) {
            const [day, month, year] = updateData.dataColeta.split('/');
            updateData.dataColeta = new Date(year, month - 1, day);
        }
        const updatedExam = await examService.updateExamService(req.params.id, updateData);
        if (updatedExam) {
            res.status(200).json(updatedExam);
        } else {
            res.status(404).json({ message: 'Exam not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteExamController = async (req, res) => {
    try {
        const deletedExam = await examService.deleteExamService(req.params.id);
        if (deletedExam) {
            res.status(200).json({ message: 'Exam deleted successfully' });
        } else {
            res.status(404).json({ message: 'Exam not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export default {createExamController, getExamsController , getExamByIdController , getExamsByUserController, updateExamController, deleteExamController};