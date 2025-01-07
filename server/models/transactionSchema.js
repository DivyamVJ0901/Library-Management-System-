const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    bookId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    borrowDate: Date,
    returnDate: Date,
});

module.exports = mongoose.model('Transaction', transactionSchema);
