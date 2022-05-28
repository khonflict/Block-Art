const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    image: {type: String},
    name:  { type: String, required: true },
    price:  { type: String, required: true }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;