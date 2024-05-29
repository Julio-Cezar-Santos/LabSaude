const Exam = require('../models/Exam');

const createExamService = ( usuarioId, tipoExameId, dataColeta, resultado ) => 
    Exam.create({ usuarioId, tipoExameId, dataColeta, resultado });

const getExamService = () => Exam.find().populate('usuarioId').populate('tipoExameId');

const getExamByIdService = (id) => Exam.findById(id).populate('usuarioId').populate('tipoExameId');

const getExamsByUserIdService = (userId) => Exam.find({usuarioId: userId}).populate('tipoExameId');

const updateExamService = (id, updateData) => Exam.findByIdAndUpdate(id, updateData, { new: true });

const deleteExamService = (id) => Exam.findByIdAndDelete(id);

module.exports = {createExamService, getExamService, getExamByIdService, getExamsByUserIdService, updateExamService, deleteExamService};