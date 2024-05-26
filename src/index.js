const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://jcezar0123:AVv1VhiSaIWhXp7A@labsaude.sjadzx1.mongodb.net/?retryWrites=true&w=majority&appName=LabSaude', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
