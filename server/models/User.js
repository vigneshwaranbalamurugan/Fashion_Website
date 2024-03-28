import mongoose from 'mongoose';

const UserAuthSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String
  },
  profile: {
    name: String,
    location: String,
  },
  role: {
    type: String,
    enum: ['user', 'seller'],
    default: 'user'
  },
  created_at: {
    type: Date,
    default: Date.now
  },
});



export default UserAuthSchema;