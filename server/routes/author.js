import express from 'express';

import { getAuthors, getAuthor, createAuthor, updateAuthor, deleteAuthor } from '../controllers/Author.js';

const router = express.Router();

router.get('/', getAuthor);
router.post('/', createAuthor);
router.get('/:id', getAuthor);
router.patch('/:id', updateAuthor);
router.delete('/:id', deleteAuthor);

export default router;
