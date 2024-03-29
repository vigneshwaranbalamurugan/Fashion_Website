import express from 'express';
import mongoose from 'mongoose';
import UserAuthSchema from '../models/User';
import bcrypt from "bcryptjs";

const databaseName = 'Fashionitems';
const database = mongoose.connection.useDb(databaseName);
const collectionName = 'user';
const user = database.model(collectionName, UserAuthSchema);

const LoginRouter = express.Router();

LoginRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userauth = await user.findOne({ email: email }).select(
            '+password'
        );
        if (!userauth) {
            return res.status(401).json({ message: 'Account not found!' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default LoginRouter



