import User from '../models/user.model.js';

const loginService = async (email) => User.findOne({email: email}).select('+senha');

export { loginService };