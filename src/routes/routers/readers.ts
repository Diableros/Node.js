import express from 'express'
import { RoutePath } from '../routePath.js'
import {
  getReaders,
  getReader,
  createReader,
  updateReader,
  deleteReader,
  borrowBook,
  returnBook,
} from '../../controllers/readers.js'

const router = express.Router()

router.get(RoutePath.Readers, getReaders)
router.get(RoutePath.ReaderById, getReader)
router.post(RoutePath.Readers, createReader)
router.patch(RoutePath.ReaderById, updateReader)
router.delete(RoutePath.ReaderById, deleteReader)

router.post(RoutePath.ReaderAction, borrowBook)
router.delete(RoutePath.ReaderAction, returnBook)

export default router
