import mongoose from 'mongoose';
import productSchema from './Product';
import UserAuthSchema from './User';

const User = mongoose.model('User', UserAuthSchema);
const Product = mongoose.model('Product',productSchema);

const orderSchema = new mongoose.Schema({
    buyer_id: { 
        type: Schema.Types.ObjectId,
         ref: 'User', required: true
         },
    product_id: {
         type: Schema.Types.ObjectId,
          ref: 'Product', 
          required: true },
    quantity: {
         type: Number,
          default: 1 },
    total_price: {
         type: Number, 
         required: true },
    status: {
         type: String,
          default: 'pending'
         },
    created_at: { 
        type: Date, 
        default: Date.now
     },
    updated_at: { 
        type: Date, 
        default: Date.now 
    },
});

export default orderSchema;