import mongoose from 'mongoose';
import UserAuthSchema from './User';
import productSchema from './Product';

const User = mongoose.model('User', UserAuthSchema);
const Product = mongoose.model('Product',productSchema);

const reviewSchema = new mongoose.Schema({
    product_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'Product',
         required: true },
    user_id: { 
        type: Schema.Types.ObjectId,
         ref: 'User', 
         required: true },
    rating: { 
        type: Number,
         required: true
         },
    comment: String,
    created_at: { 
        type: Date,
         default: Date.now
         },
});

export default reviewSchema;
