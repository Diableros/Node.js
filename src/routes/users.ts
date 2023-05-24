import express from 'express'
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/users.js'

const router = express.Router()

router.get('/users', getUsers)
router.post('/users', createUser)
router.get('/users/:user_id', getUser)
router.patch('/users/:user_id', updateUser)
router.delete('/users/:user_id', deleteUser)

export default router
