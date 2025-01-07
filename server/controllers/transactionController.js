const Book = require('../models/bookSchema')
const Transaction = require('../models/transactionSchema')

exports.borrowBook = async (req, res) => {
  const { bookId, userId } = req.body
  try {
    // Getting book by its id
    const book = await Book.findById(bookId)

    // check the availablity of book from the db
    if (!book || !book.isAvailable) {
      return res.status(400).json({
        success: false,
        message: 'Book is not available'
      })
    }

    book.isAvailable = false

    await book.save()

    const transaction = new Transaction({
      bookId,
      userId,
      borrowDate: new Date()
    })

    // Save this transaction in the DB
    await transaction.save()

    return res.status(201).json({
      transaction,
      status: false,
      message: 'You borrowed the book successfully'
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

exports.returnBook = async (req, res) => {
  const { bookId, userId } = req.body
  try {
    // Find out the transaction from the DB
    const transaction = await Transaction.findOne({
      bookId,
      userId,
      returnDate: null
    })

    // Check if the trasaction of the book done or not
    if (!transaction) {
      return res.status(400).json({
        success: false,
        message: 'Transaction not found'
      })
    }

    transaction.returnDate = new Date()
    await transaction.save()

    const book = await Book.findById(bookId)
    book.isAvailable = true
    await book.save()

    return res.status(201).json({
      transaction,
      success: true,
      message: 'Book Returned Successfully'
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}
