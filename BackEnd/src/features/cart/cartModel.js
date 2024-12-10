import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productDetails: { type: Object, required: true },
  itemQuantity: { type:Number,default:1, min: 1 },
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
