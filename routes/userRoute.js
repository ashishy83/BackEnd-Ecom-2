const express = require('express');
const {logIn, signUp, resetPassword} = require('../controller/userController');

const userRoute = express.Router();

userRoute.post('/login',logIn);
userRoute.post('/signup',signUp);
userRoute.post('/resetpassword',resetPassword);

module.exports=userRoute;
