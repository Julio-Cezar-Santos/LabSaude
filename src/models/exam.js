import { Schema, model } from 'mongoose';

// {
//     _id: 1,
//     usuarioId: 1,
//     tipoExameId: 1,
//     dataColeta: '21/05/2024',
//     resultado: '89'
// }

// --Resultado Exames 1
// --Formato completo para exibicao / listagem
// {
//   _id: 1,
//   dataColeta: '21/05/2024',
//   resultado: '89',
//   usuario: {
//     _id: 1,
//     nome: 'Danielle',
//     dataNascimento: '12/02/1987',
//     cpf: '000.000.000-00',
//     email: 'daniellemaia01@gmail.com',
//     senha: '12345',
//     admin: true
//   },
//   tipoExame: { 
//     _id: 1, 
// 	nomeExame: 'Glicemia', 
// 	valorReferencia: 'Até 99mg/dl' }
// }


const ExamSchema = new Schema({
    usuarioId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tipoExameId: { type: Schema.Types.ObjectId, ref: 'ExamType', required: true },
    dataColeta: { type: Date, required: true },
    resultado: { type: String, required: true },
});

const Exam = model('Exam', ExamSchema);

export default Exam;