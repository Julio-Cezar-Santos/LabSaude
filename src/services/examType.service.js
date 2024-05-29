const ExamType = require('../models/ExamType.js');

const createExamTypeService = async ({ nomeExame, valorReferencia }) => {
    const examType = new ExamType({ nomeExame, valorReferencia });
    await examType.save();
    return examType;
};

const getExamTypeService = async () => {
    return await ExamType.find();
}

const getExamTypeByIdService = async (id) => {
    return await ExamType.findById(id);
}

const updateExamTypeService = async (id, { nomeExame, valorReferencia }) => {
    return await ExamType.findByIdAndUpdate(id, { nomeExame, valorReferencia }, { new: true });
}

const deleteExamTypeService = async (id) => {
    return await ExamType.findByIdAndDelete(id);
}

module.exports = { createExamTypeService, getExamTypeService, getExamTypeByIdService, updateExamTypeService, deleteExamTypeService };