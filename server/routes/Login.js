import express from 'express';
import mongoose from 'mongoose';
import UserAuthSchema from '../models/User.js';
import bcrypt from "bcryptjs";
import { generateToken, isAuth } from '../Token/jswebtoken.js';

const databaseName = 'Fashionitems';
const database = mongoose.connection.useDb(databaseName);
const collectionName = 'user';
const user = database.model(collectionName, UserAuthSchema);

const LoginRouter = express.Router();

LoginRouter.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userauth = await user.findOne({ email: email }).select(
            '+password'
        );
        if (!userauth) {
            return res.status(401).json({ message: 'Account not found!' });
        }
        if (!bcrypt.compareSync(password, userauth.password)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const userdetails={
            useremail:userauth.email
        }
        const token=generateToken(user);
        res.header('Authorization', `Bearer ${token}`).send({userdetails,message:'Login Sucessfully'});
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

LoginRouter.post('/hi',isAuth, (req,res) => {

});

export default LoginRouter;



