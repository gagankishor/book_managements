const Book = require('../models/bookModel');

exports.createBook = async (req, res) => {
  const { title, author, genre } = req.body;
  const coverImage = req.file ? req.file.filename : null;

  try {
    const book = await Book.create({ title, author, genre, coverImage });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, genre } = req.body;
  const coverImage = req.file ? req.file.filename : null;

  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    book.title = title;
    book.author = author;
    book.genre = genre;
    if (coverImage) {
      book.coverImage = coverImage;
    }

    await book.save();
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    await book.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};  