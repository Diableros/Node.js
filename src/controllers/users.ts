import { Request, Response } from 'express'
import User from '../models/user.js'

export const getUsers = (request: Request, response: Response) => {
  return User.find({})
    .then((data) => response.status(200).send(data))
    .catch((error) => response.status(500).send(error.message))
}

export const getUser = (request: Request, response: Response) => {
  const { user_id } = request.params
  return User.findById(user_id)
    .then((user) => response.status(200).send(user))
    .catch((error) => response.status(500).send(error.message))
}

export const createUser = (request: Request, response: Response) => {
  return User.create({ ...request.body })
    .then((user) => {
      response.status(201).send(user)
    })
    .catch((error) => response.status(500).send(error.message))
}

export const updateUser = (request: Request, response: Response) => {
  const { user_id } = request.params
  return User.findByIdAndUpdate(user_id, { ...request.body })
    .then((user) => response.status(200).send(user))
    .catch((error) => response.status(500).send(error.message))
}

export const deleteUser = (request: Request, response: Response) => {
  const { user_id } = request.params
  return User.findByIdAndDelete(user_id)
    .then(() => response.status(200).send('User deleteв successfully'))
    .catch((error) => response.status(500).send(error.message))
}
