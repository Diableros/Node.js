import express from 'express'
import { RoutePath } from '../routePath.js'
import {
  getReaders,
  getReader,
  createReader,
  updateReader,
  deleteReader,
} from '../../controllers/readers.js'

const router = express.Router()

router.get(RoutePath.Readers, getReaders)
router.get(RoutePath.ReaderById, getReader)
router.post(RoutePath.Readers, createReader)
router.patch(RoutePath.ReaderById, updateReader)
router.delete(RoutePath.ReaderById, deleteReader)

export default router
