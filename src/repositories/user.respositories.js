const User = require('../models/User');

const findByEmailUserRepository = (email) => User.findOne({ email: email });

module.exports = { findByEmailUserRepository };