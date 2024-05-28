import userService from '../services/user.service.js';
import userRepositories  from '../repositories/user.respositories.js';


const createUser = async (req, res) => {
    const { nome, email, senha, dataNascimento, cpf, admin} = req.body;

    if (!nome || !email || !senha || !dataNascimento || !cpf || admin === undefined) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const foundUser = await userRepositories.findByEmailUserRepository(email);
        
        if (foundUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        const user = await userService.createUserService(req.body);

        if (!user) {
            return res.status(400).json({ message: 'User not created' });
        }

        const { senha, ...userWithoutPassword } = user.toObject();

        res.status(201).json({ message: 'User created successfully', user: userWithoutPassword });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllUsers = async (_req, res) => {
    try {
        const users = await userService.getAllUsersService();

        if (users.length === 0 || !users){
            return res.status(404).json({ message: 'No users found' });
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = req.user;    
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    const { nome, email, senha, dataNascimento, cpf, admin } = req.body;

    if (!nome && !email && !senha && !dataNascimento && !cpf && admin === undefined) {
        return res.status(400).json({ message: 'Submit at least one field for update' });
    }

    const { id, user} = req;


    try {
        const updatedUser = await userService.updateUserService(id, nome, email, senha, dataNascimento, cpf, admin);
        res.status(200).json({ message: 'User updated successfully', user: updatedUser});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default{ 
    createUser, 
    getAllUsers, 
    getUserById, 
    updateUser
};