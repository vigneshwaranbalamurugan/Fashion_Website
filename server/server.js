import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import RegisterRouter from './routes/Register.js';

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Connected to db');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

app.use('/auth',RegisterRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});
