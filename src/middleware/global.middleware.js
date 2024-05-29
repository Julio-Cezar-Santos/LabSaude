import mongoose from 'mongoose';
import userService from '../services/user.service.js';

const validID = (req, res, next) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ message: 'Invalid ID' });
    }
    next();
}

const validUser = async (req, res, next) => {
    const id = req.params.id;
    const user = await userService.getUserByIdService(id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    req.id = id; 
    req.user = user;
    next();
}
export { validID, validUser };