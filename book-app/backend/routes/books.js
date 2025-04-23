const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Get all books
router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

// Search books by author
router.get('/search', async (req, res) => {
    const { author } = req.query;
    const books = await Book.find({ author: new RegExp(author, 'i') });
    res.json(books);
});

// Add new book
router.post('/', async (req, res) => {
    const { title, author, price } = req.body;
    const newBook = new Book({ title, author, price });
    await newBook.save();
    res.status(201).json(newBook);
});

module.exports = router;
