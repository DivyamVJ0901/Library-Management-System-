const express = require('express');
const { addBook, getAllBooks, updateBook, deleteBook } = require('../controllers/bookController');
const router = express.Router();

router.post('/', addBook);
router.get('/', getAllBooks);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
