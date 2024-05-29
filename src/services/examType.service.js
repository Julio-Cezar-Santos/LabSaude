import e from 'express';
import ExamType from '../models/ExamType.js';

export const createExamTypeService = async ({ nomeExame, valorReferencia }) => {
    const examType = new ExamType({ nomeExame, valorReferencia });
    await examType.save();
    return examType;
};

export const getExamTypeService = async () => {
    return await ExamType.find();
}

export const updateExamTypeService = async (id, { nomeExame, valorReferencia }) => {
    return await ExamType.findByIdAndUpdate(id, { nomeExame, valorReferencia }, { new: true });
}

export const deleteExamTypeService = async (id) => {
    return await ExamType.findByIdAndDelete(id);
}