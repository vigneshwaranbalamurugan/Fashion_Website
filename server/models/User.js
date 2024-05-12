import mongoose from 'mongoose';

const UserAuthSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  profile: {
    name: {
      type: String,
      default: null,
    },
    gender:{
      type:String,
      default:null,
    },
    phoneNumber: {
      type: String,
      default:null,
    },
    dob:{
      type:Date,
      default:null,
    },
    address: {
      street: {
        type: String,
        default: null,
      },
      city: {
        type: String,
        default: null,
      },
      zip: {
        type: String,
        default: null,
      },
      state: {
        type: String,
        default: null,
      },
      country: {
        type: String,
        default: null,
      },
    },
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