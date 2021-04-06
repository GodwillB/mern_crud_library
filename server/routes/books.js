import express from 'express';

import { getBooks, getBook, createBook, updateBook, deleteBook } from '../controllers/Book.js';

const router = express.Router();

router.get('/', getBook);
router.post('/', createBook);
router.get('/:id', getBook);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
