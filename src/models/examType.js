import { Schema, model } from 'mongoose';

const ExamTypeSchema = new Schema({
    nomeExame: { type: String, required: true }, 
    valorReferencia: { type: String, required: true },
});

const ExamType = model('ExamType', ExamTypeSchema);

export default ExamType;