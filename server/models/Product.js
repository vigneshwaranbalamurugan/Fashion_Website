import mongoose from 'mongoose';
import UserAuthSchema from './User';

const User = mongoose.model('User', UserAuthSchema);

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    category: String,
    brand: String,
    size: [String],
    offer:[String],
    color: String,
    images: [String],
    gender:String,
    seller_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'active'
    },
});


export default productSchema;