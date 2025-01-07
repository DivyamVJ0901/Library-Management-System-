const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publicationYear: Number,
    isAvailable: Boolean,
});

module.exports = mongoose.model('Book', bookSchema);
