import User from '../models/user.model.js';

const findByEmailUserRepository = (email) => User.findOne({ email: email });

export default { findByEmailUserRepository };