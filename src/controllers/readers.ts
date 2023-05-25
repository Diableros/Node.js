import { Request, Response } from 'express'
import Reader from '../models/reader.js'
import { Error } from 'mongoose'
import errorParser from '../utils/errorParser.js'

export const getReaders = async (req: Request, res: Response) => {
  return Reader.find({})
    .then((data) => res.status(200).send(data))
    .catch((error: Error) => {
      res.status(500).send(error.message)
    })
}

export const getReader = async (req: Request, res: Response) => {
  const { reader_id } = req.params
  return Reader.findById(reader_id)
    .then((reader) => res.status(200).send(reader))
    .catch((error: Error) => errorParser(error, res))
}

export const createReader = async (req: Request, res: Response) => {
  return Reader.create({ ...req.body })
    .then((reader) => {
      res.status(201).send(reader)
    })
    .catch((error: Error) => res.status(500).send(error.message))
}

export const updateReader = async (req: Request, res: Response) => {
  const { reader_id } = req.params
  return Reader.findByIdAndUpdate(reader_id, { ...req.body }, { new: true })
    .then((reader) => res.status(200).send(reader))
    .catch((error: Error) => errorParser(error, res))
}

export const deleteReader = async (req: Request, res: Response) => {
  const { reader_id } = req.params
  return Reader.findByIdAndDelete(reader_id)
    .then((reader) => res.status(200).send(reader))
    .catch((error: Error) => errorParser(error, res))
}
