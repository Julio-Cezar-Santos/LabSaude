import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDatabase from './database/db.js';


import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';

dotenv.config();
connectDatabase();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', userRoute);
app.use('/login', authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
