import userService from '../services/user.service.js';

export const adminMiddleware = async (req, res, next) => {
    try {
        const user = await userService.getUserByIdService(req.userId);
        if (user && user.admin) {
            next();
        } else {
            res.status(403).json({ message: 'Acesso negado. Apenas administradores podem acessar esta rota.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao verificar privilégios de administrador.' });
    }
};