const { Schema, model } = require('mongoose');

const ExamTypeSchema = new Schema({
    nomeExame: { type: String, required: true }, 
    valorReferencia: { type: String, required: true },
});

const ExamType = model('ExamType', ExamTypeSchema);

module.exports = ExamType;