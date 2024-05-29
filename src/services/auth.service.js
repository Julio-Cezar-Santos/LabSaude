// import User from '../models/user.js';
// import jwt from 'jsonwebtoken';

const User = require('../models/user');
const jwt = require('jsonwebtoken');

const loginService = async (email) => User.findOne({email: email}).select('+senha');

const generateToken = (id) => jwt.sign({id: id}, process.env.SECRET_JWT, {expiresIn: 86400});

module.exports = { loginService, generateToken };