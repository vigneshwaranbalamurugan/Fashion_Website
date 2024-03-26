import  mongoose from 'mongoose';

const UserAuthSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      }
  });



export default UserAuthSchema;