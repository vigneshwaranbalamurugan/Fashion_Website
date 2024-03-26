import express from 'express';
import mongoose  from 'mongoose';
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { verificationStore, sendConfirmationEmail, generateVerificationCode } from '../Verification/VerifyMail.js';


const databaseName = 'Fashionitems';
const database = mongoose.connection.useDb(databaseName);
const collectionName = 'user';
const user = database.model(collectionName, User);

const RegisterRouter = express.Router();

RegisterRouter.post('/request-otp', async (req, res) => {
    try {
        const { email } = req.body;
        const existingUser = await user.findOne({
            email
        });


        if (existingUser) {
            return res.status(400).json({ message: 'Username or mobile number already exists' });
        }
        const verificationCode = generateVerificationCode();
        verificationStore.set(email, verificationCode);
        sendConfirmationEmail(email, verificationCode);
        res.status(201).json({ message: 'OTP sent to your Mail' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})


export default RegisterRouter