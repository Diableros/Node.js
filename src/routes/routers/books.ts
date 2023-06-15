import express from 'express'
import { RoutePath } from '../routePath.js'
import {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from '../../controllers/books.js'

const router = express.Router()

router.get(RoutePath.Books, getBooks)
router.get(RoutePath.BookById, getBook)
router.post(RoutePath.Books, createBook)
router.patch(RoutePath.BookById, updateBook)
router.delete(RoutePath.BookById, deleteBook)

export default router
