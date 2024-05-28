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

const countUsersService = async () => { return await User.countDocuments(); }
export  default  {createUserService, getAllUsersService, getUserByIdService, updateUserService, countUsersService}