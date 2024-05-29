import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDatabase from './src/database/db.js';
import examTypeRouter from './src/routes/examType.route.js';
import userRoute from './src/routes/user.route.js';
import authRoute from './src/routes/auth.route.js';
import exam from './src/routes/exam.route.js';

dotenv.config();
connectDatabase();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', userRoute);
app.use('/login', authRoute);
app.use('/examType', examTypeRouter);
app.use('/exam', exam);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
