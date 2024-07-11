const express = require('express');
const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require('../controllers/bookController');
const authenticateToken = require('../middleware/authMiddleware');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/', authenticateToken, upload.single('coverImage'), createBook);
router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.put('/:id', authenticateToken, upload.single('coverImage'), updateBook);
router.delete('/:id', authenticateToken, deleteBook);

module.exports = router;
