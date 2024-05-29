import User from '../models/user.js';

const createUserService = (body) => User.create(body);

const getAllUsersService = async (offset, limit) => {
    return await User.find().skip(offset).limit(limit);
}

const getUserByIdService = async (id) => {
    return await User.findById(id);
}

const updateUserService = async (id, nome, email, senha, dataNascimento, cpf, admin) => {
    return User.findOneAndUpdate(
        {_id: id}, {
            nome,
            email,
            senha,
            dataNascimento,
            cpf,
            admin
        }, {new: true}
    );
}

const deleteUserService = async (id) => {
    return User.findByIdAndDelete(id);
}


const countUsersService = async () => {
    try {
        const totalUsers = await User.countDocuments();
        return totalUsers;
    } catch (error) {
        throw error;
    }
};

export default  {createUserService, getAllUsersService, getUserByIdService, updateUserService, deleteUserService , countUsersService}