const { Schema, model } = require('mongoose');
const ExamSchema = new Schema({
    usuarioId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tipoExameId: { type: Schema.Types.ObjectId, ref: 'ExamType', required: true },
    dataColeta: { type: Date, required: true },
    resultado: { type: String, required: true },
});

const exam = model('exam', ExamSchema);

module.exports = exam;