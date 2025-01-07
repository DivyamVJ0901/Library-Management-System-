const Book = require('../models/bookSchema')

exports.addBook = async (req, res) => {
  try {
    const { title, author, publicationYear } = req.body

    if (!title || !author || !publicationYear) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      })
    }

    const existingBook = await Book.findOne({ title, author, publicationYear })
    if (existingBook) {
      return res.status(400).json({
        success: false,
        message: 'book already present in the library'
      })
    }

    const book = await Book.create({
      title,
      author,
      publicationYear
    })

    // return response
    return res.status(200).json({
      book,
      success: true,
      message: 'Book added successfully'
    })
  } catch (err) {
    // Error handling
    return res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find()
    return res.status(201).json({
      books,
      success: true,
      message: 'Books list fetched successfully'
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.status(201).json({
      success: true,
      message: 'Book updated successfully'
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id)
    return res.status(201).json({
      success: true,
      message: 'Book deleted'
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}
