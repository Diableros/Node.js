import { Request, Response } from 'express'
import Book from '../models/book.js'
import { Error } from 'mongoose'
import errorParser from '../utils/errorParser.js'

export const getBooks = async (req: Request, res: Response) => {
  return Book.find({})
    .then((data) => res.status(200).send(data))
    .catch((error: Error) => res.status(500).send(error.message))
}

export const getBook = async (req: Request, res: Response) => {
  const { book_id } = req.params
  return Book.findById(book_id)
    .then((book) => res.status(200).send(book))
    .catch((error: Error) => errorParser(error, res))
}

export const createBook = async (req: Request, res: Response) => {
  return Book.create({ ...req.body })
    .then((book) => {
      res.status(201).send(book)
    })
    .catch((error: Error) => res.status(500).send(error.message))
}

export const updateBook = async (req: Request, res: Response) => {
  const { book_id } = req.params
  return Book.findByIdAndUpdate(book_id, { ...req.body }, { new: true })
    .then((book) => res.status(200).send(book))
    .catch((error: Error) => errorParser(error, res))
}

export const deleteBook = async (req: Request, res: Response) => {
  const { book_id } = req.params
  return Book.findByIdAndDelete(book_id)
    .then((book) => res.status(200).send(book))
    .catch((error: Error) => errorParser(error, res))
}
