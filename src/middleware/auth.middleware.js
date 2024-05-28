import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import userService from '../services/user.service.js';

dotenv.config();

export const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: 'Token not provided' });
        }

        const parts = authHeader.split(' ');

        if (parts.length !== 2) {
            return res.status(401).json({ message: 'Token error' });
        }

        const [scheme, token] = parts;

        if (!/^Bearer$/i.test(scheme)) {
            return res.status(401).json({ message: 'Token malformatted' });
        }

        jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Token invalid' });
            }
            try {
                const user = await userService.getUserByIdService(decoded.id);

                if (!user) {
                    return res.status(401).json({ message: 'User not found' });
                }

                req.userId = user._id;
                return next();
            } catch (error) {
                return res.status(500).json({ message: 'Error fetching user' });
            }
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error processing token' });
    }
}