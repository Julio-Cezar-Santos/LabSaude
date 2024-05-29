const User = require('../models/user');

const findByEmailUserRepository = (email) => User.findOne({ email: email });

module.exports = { findByEmailUserRepository };