const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/usersModels')

const createUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Missing data');
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(400);
        throw new Error('This user already exist in the database.');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400);
        throw new Error('The user could not be saved');
    }
    //res.status(201).json({ message: 'Create User'})
})

const loginUser = (req, res) => {
    res.status(200).json({ message: 'User Login'})
}
const dataUser = asyncHandler(async (req, res) => {
    const user = await User.findOne(req.userId);
    
    res.status(200).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id)
    })

})

const generateToken = (userId) => {
    return jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    createUser,
    loginUser,
    dataUser
}