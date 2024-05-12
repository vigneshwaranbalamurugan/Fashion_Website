import express from 'express';
import mongoose from 'mongoose';
import UserAuthSchema from "../models/User.js";
import bcrypt from "bcryptjs";
import { verificationStore, sendConfirmationEmail, generateVerificationCode, verifiedEmail } from '../Verification/VerifyMail.js';


const databaseName = 'Fashionitems';
const database = mongoose.connection.useDb(databaseName);
const collectionName = 'user';
const user = database.model(collectionName, UserAuthSchema);

const RegisterRouter = express.Router();

/*-------------Request-OTP routing---------------*/

RegisterRouter.post('/request-otp', async (req, res) => {
    try {
        const { email } = req.body;
        const existingUser = await user.findOne({
            email
        });


        if (existingUser) {
            return res.status(400).json({ message: 'User is already exists in this email' });
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

/*---------------------Verify-OTP Routing---------------------------*/

RegisterRouter.post('/verify-otp', async (req, res) => {
    try {
        const { email, otp } = req.body;
        const storedCode = verificationStore.get(email);

        if (storedCode && storedCode == otp) {
            verifiedEmail.set(email, true);
            res.status(201).json({ message: 'Account verified!' });
            verificationStore.delete(email);
        } else {
            res.status(400).send('Invalid verification code');
        }
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

/*--------------------Registration-------------------*/

RegisterRouter.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const isverified = verifiedEmail.get(email);

        if (!isverified) {
            return res.status(400).json({ message: 'E-mail is not Verified yet!' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const newUser = new user({
            email,
            password: hashedPassword,
        });

        verifiedEmail.delete(email);
        await newUser.save();
        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

export default RegisterRouter