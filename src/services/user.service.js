import User from '../models/user.model.js';

const createUserService = (body) => User.create(body);

const getAllUsersService = async () => {
    return await User.find();
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
export  default  {createUserService, getAllUsersService, getUserByIdService, updateUserService}