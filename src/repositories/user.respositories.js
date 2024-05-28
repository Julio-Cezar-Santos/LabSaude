import User from '../models/user.js';

const findByEmailUserRepository = (email) => User.findOne({ email: email });

export default { findByEmailUserRepository };