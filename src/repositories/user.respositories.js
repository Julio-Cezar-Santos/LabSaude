const User = require('../models/user.model');

const findByEmailUserRepository = (email) => User.findOne({ email: email });

module.exports = { findByEmailUserRepository };