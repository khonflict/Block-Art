const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    image: String,
    name:  String,
    price:  String,
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;