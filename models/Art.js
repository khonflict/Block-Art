const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
    image: String,
    name:  String,
    description: String,
    price:  String,
});

const Art = mongoose.model('Art', artSchema);

module.exports = Art;