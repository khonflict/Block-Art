const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
    image: {type: String},
    name:  { type: String, required: true },
    price:  { type: String, required: true }
});

const Art = mongoose.model('Art', artSchema);

module.exports = Art;